<script lang="ts">
	import { base } from '$app/paths';
	import FullBreakoutSection from '$lib/common/FullBreakoutSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import {
		default as jscanify,
		type OpenCv,
		type CornerPoints
	} from '$lib/tools/document-scanner/jscanify';
	import { onMount, tick } from 'svelte';
	import type { DragEventHandler, EventHandler, MouseEventHandler } from 'svelte/elements';

	let scannerState = $state<
		| 'initializing'
		| 'error-no-input-device'
		| 'needs-permission'
		| 'scanning'
		| 'selecting-paper'
		| 'processing'
		| 'processed'
		| 'result'
	>('initializing');
	let permissionError = $state<string>();
	let cameraStream = $state<MediaStream>();
	let selectedCameraIndex = $state<number>();
	let resultHeight = $state<number>(842);
	let resultWidth = $state<number>(595);
	let resultAspect = $state<number>(842 / 595);
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let processedImage = $state(new Uint8Array());
	let scanImageTimer = $state<ReturnType<typeof setTimeout>>();
	let lastCornerPoints = $state<CornerPoints>();

	let scanner: jscanify;
	let video: HTMLVideoElement;
	let previewCanvas = new OffscreenCanvas(0, 0);
	let highlightCanvas: HTMLCanvasElement;
	let resultCanvasDiv: HTMLDivElement;

	onMount(async () => {
		const openCvScript = document.createElement('script');
		openCvScript.async = true;
		openCvScript.src = `${base}/vendor/opencv.js`;
		openCvScript.onload = () => {
			scannerState =
				'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
					? 'needs-permission'
					: 'error-no-input-device';
		};
		document.body.appendChild(openCvScript);
		const devices = await navigator.mediaDevices.enumerateDevices();
		availableCameras = devices.filter((device) => device.kind === 'videoinput');
	});

	async function transformToPdf(
		image: Uint8Array,
		_options: { format: 'A4' | 'auto' } = { format: 'A4' }
	) {
		console.log('should transform to pdf');
	}

	const dragStart =
		(point: keyof CornerPoints): DragEventHandler<HTMLButtonElement> =>
		(event) => {
			console.log('trying to drag', point);
			if (!lastCornerPoints) return;
			event.currentTarget.classList.replace('bg-teal-400', 'bg-red-400');
		};
	const dragStop =
		(point: keyof CornerPoints): DragEventHandler<HTMLButtonElement> =>
		async (event) => {
			console.log('stopping drag of', point);
			if (!lastCornerPoints) return;
			lastCornerPoints[point] = { x: event.clientX, y: event.clientY };
			event.currentTarget.style.left = `${lastCornerPoints[point].x}px`;
			event.currentTarget.style.top = `${lastCornerPoints[point].y}px`;
			event.currentTarget.classList.replace('bg-red-400', 'bg-teal-400');
			const ctx = highlightCanvas.getContext('2d');
			ctx?.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);
			ctx?.drawImage(previewCanvas, 0, 0);
			await highlightLastFoundPaperOnCanvas(highlightCanvas);
		};
	const dragging =
		(point: keyof CornerPoints): DragEventHandler<HTMLButtonElement> =>
		(event) => {
			console.log('dragging', point);
			if (!lastCornerPoints) return;
			lastCornerPoints[point] = { x: event.clientX, y: event.clientY };
		};

	const extractLatestPointsIntoPdf: MouseEventHandler<HTMLButtonElement> = (event) => {
		const result = scanner.extractPaper(previewCanvas, resultWidth, resultHeight, lastCornerPoints);
		for (const child of resultCanvasDiv.childNodes) {
			child.remove();
		}
		resultCanvasDiv.append(result);
	};
	async function stopScanning() {
		const ctx = highlightCanvas.getContext('2d');
		ctx?.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);
		ctx?.drawImage(previewCanvas, 0, 0);
		await highlightLastFoundPaperOnCanvas(highlightCanvas);
		clearTimeout(scanImageTimer);
		scanImageTimer = undefined;
		cameraStream?.getTracks().forEach((track) => track.stop());
		video.pause();
		video.srcObject = null;
		cameraStream = undefined;
		if (lastCornerPoints) {
			scannerState = 'selecting-paper';
			await tick();
		} else {
			scannerState = 'needs-permission';
		}
	}

	async function nextCamera() {
		if (selectedCameraIndex === undefined) {
			selectedCameraIndex = -1;
		}
		selectedCameraIndex = (selectedCameraIndex + 1) % availableCameras.length;
		cameraStream?.getTracks().forEach((track) => track.stop());
		video.pause();
		video.srcObject = null;
		cameraStream = undefined;
		startScanning();
	}

	const SCAN_IMAGE_TIME_IN_MS = 100;
	function rerunHighlightPaperInVideo() {
		previewCanvas.getContext('2d', { willReadFrequently: true })?.drawImage(video, 0, 0);
		const cornerPoints = scanner.findCornerPointsOfPaper(previewCanvas);
		if (cornerPoints) {
			lastCornerPoints = cornerPoints;
			highlightCanvas
				.getContext('2d')
				?.clearRect(0, 0, highlightCanvas.width, highlightCanvas.height);
			highlightLastFoundPaperOnCanvas(highlightCanvas);
		}
		scanImageTimer = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
	}

	async function highlightLastFoundPaperOnCanvas(canvas: HTMLCanvasElement) {
		if (!lastCornerPoints) {
			console.warn('no corner points found');
			return;
		}
		try {
			const ctx = canvas.getContext('2d');
			if (!ctx) return;
			ctx.strokeStyle = 'orange';
			ctx.fillStyle = 'rgba(255, 128, 128, 0.2)';
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(lastCornerPoints.topLeftCorner.x, lastCornerPoints.topLeftCorner.y);
			ctx.lineTo(lastCornerPoints.topRightCorner.x, lastCornerPoints.topRightCorner.y);
			ctx.lineTo(lastCornerPoints.bottomRightCorner.x, lastCornerPoints.bottomRightCorner.y);
			ctx.lineTo(lastCornerPoints.bottomLeftCorner.x, lastCornerPoints.bottomLeftCorner.y);
			ctx.lineTo(lastCornerPoints.topLeftCorner.x, lastCornerPoints.topLeftCorner.y);
			ctx.fill();
			ctx.stroke();
		} catch (error) {
			console.warn('could not scan', error);
		}
	}

	async function startScanning() {
		try {
			permissionError = undefined;
			const constraint =
				selectedCameraIndex === undefined
					? { facingMode: 'environment' }
					: { deviceId: availableCameras[selectedCameraIndex].deviceId };
			cameraStream = await navigator.mediaDevices.getUserMedia({
				video: constraint
			});
			if (!cameraStream) {
				throw Error('No camera found');
			}
			selectedCameraIndex =
				availableCameras.findIndex((camera) =>
					cameraStream?.getTracks().some((track) => track.label === camera.label)
				) ?? 0;
			video.srcObject = cameraStream;
			lastCornerPoints = undefined;
			await new Promise((resolve) => {
				video.onloadedmetadata = resolve;
			});
			video.play();
			previewCanvas.height = highlightCanvas.height = video.videoHeight;
			previewCanvas.width = highlightCanvas.width = video.videoWidth;
			const openCv = await (globalThis as typeof globalThis & { cv: typeof OpenCv }).cv;
			scanner = new jscanify(openCv);
			scannerState = 'scanning';
			scanImageTimer = setTimeout(rerunHighlightPaperInVideo, 1);
		} catch (error) {
			permissionError = 'Error when using devices: ' + error;
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullBreakoutSection class="px-8">
		<section
			class="relative isolate grid h-full w-full grid-cols-1 grid-rows-1 place-items-center border border-red-400"
		>
			{#if scannerState === 'scanning'}
				<button class="absolute inset-0 z-10 opacity-0" onclick={stopScanning}>Stop scanning</button
				>
			{/if}
			<video bind:this={video} class="[grid-area:1/1/2/2]" playsinline>
				<track kind="captions" />
			</video>
			<canvas bind:this={highlightCanvas} class="h-full w-full [grid-area:1/1/2/2]"></canvas>
			{#if scannerState === 'selecting-paper'}
				<button
					draggable="true"
					ondragstart={dragStart('topLeftCorner')}
					ondragend={dragStop('topLeftCorner')}
					ondrag={dragging('topLeftCorner')}
					class="absolute h-8 w-8 rounded-full bg-teal-400"
					style="left:{lastCornerPoints?.topLeftCorner.x ?? 0}px;top:{lastCornerPoints
						?.topLeftCorner.y ?? 0}px">↖️</button
				>
				<button
					draggable="true"
					ondragstart={dragStart('topRightCorner')}
					ondragend={dragStop('topRightCorner')}
					ondrag={dragging('topRightCorner')}
					class="absolute h-8 w-8 rounded-full bg-teal-400"
					style="left:{lastCornerPoints?.topRightCorner.x ?? 0}px;top:{lastCornerPoints
						?.topRightCorner.y ?? 0}px">↗️</button
				>
				<button
					draggable="true"
					ondragstart={dragStart('bottomRightCorner')}
					ondragend={dragStop('bottomRightCorner')}
					ondrag={dragging('bottomRightCorner')}
					class="absolute h-8 w-8 rounded-full bg-teal-400"
					style="left:{lastCornerPoints?.bottomRightCorner.x ?? 0}px;top:{lastCornerPoints
						?.bottomRightCorner.y ?? 0}px">↘️</button
				>
				<button
					draggable="true"
					ondragstart={dragStart('bottomLeftCorner')}
					ondragend={dragStop('bottomLeftCorner')}
					ondrag={dragging('bottomLeftCorner')}
					class="absolute h-8 w-8 rounded-full bg-teal-400"
					style="left:{lastCornerPoints?.bottomLeftCorner.x ?? 0}px;top:{lastCornerPoints
						?.bottomLeftCorner.y ?? 0}px">↙️</button
				>
			{/if}
		</section>
		{#if scannerState === 'initializing'}
			<div>Waiting for OpenCV</div>
		{:else if scannerState === 'error-no-input-device'}
			<div>No input device found</div>
		{:else if scannerState === 'needs-permission'}
			<button class="p-4" onclick={startScanning}>Start scanning</button>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'scanning'}
			<button class="p-4" onclick={stopScanning}>Stop scanning</button>
			{#if availableCameras.length > 1}
				<button class="p-4" onclick={nextCamera}>Next camera</button>
			{/if}
		{:else if scannerState === 'selecting-paper'}
			<div class="flex items-center gap-4">
				<label>Height: <input type="number" bind:value={resultHeight} /></label>
				<label>Width: <input type="number" bind:value={resultWidth} /></label>
				<button onclick={extractLatestPointsIntoPdf}>Extract</button>
			</div>
		{:else if scannerState === 'processed'}
			<div>Specific format or as big as it is?</div>
			<button onclick={() => transformToPdf(processedImage)}>Transform as it is</button>
			<button onclick={() => transformToPdf(processedImage, { format: 'A4' })}
				>Transform into A4</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
		{/if}
		<div bind:this={resultCanvasDiv}></div>
	</FullBreakoutSection>
</PageLayout>

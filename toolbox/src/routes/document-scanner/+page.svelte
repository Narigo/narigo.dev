<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { default as jscanify, type OpenCv } from '$lib/tools/document-scanner/jscanify';
	import { onMount } from 'svelte';

	let scannerState = $state<
		| 'initializing'
		| 'needs-permission'
		| 'no-input-device'
		| 'searching'
		| 'scanning'
		| 'processing'
		| 'processed'
		| 'result'
	>('initializing');
	let permissionError = $state<string>();
	let cameraStream = $state<MediaStream>();
	let selectedCameraIndex = $state<number>();
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let processedImage = $state(new Uint8Array());

	let scanner: jscanify;
	let video: HTMLVideoElement;
	let previewCanvas = new OffscreenCanvas(0, 0);
	let extractCanvas: HTMLCanvasElement;
	let highlightCanvas: HTMLCanvasElement;
	let scanImageTimer: ReturnType<typeof setTimeout> | undefined = undefined;

	onMount(async () => {
		const openCvScript = document.createElement('script');
		openCvScript.async = true;
		openCvScript.src = `${base}/vendor/opencv.js`;
		openCvScript.onload = () => {
			scannerState =
				'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
					? 'needs-permission'
					: 'no-input-device';
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

	function stopScanning() {
		clearTimeout(scanImageTimer);
		scanImageTimer = undefined;
		cameraStream?.getTracks().forEach((track) => track.stop());
		video.pause();
		video.srcObject = null;
		cameraStream = undefined;
		scannerState = 'needs-permission';
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
	async function scanImageFromVideo() {
		try {
			previewCanvas.getContext('2d', { willReadFrequently: true })?.drawImage(video, 0, 0);
			scanner.drawAndExtract(previewCanvas, { extractCanvas, highlightCanvas });
			scanImageTimer = setTimeout(scanImageFromVideo, SCAN_IMAGE_TIME_IN_MS);
		} catch (error) {
			console.error('could not scan', error);
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
			await new Promise((resolve) => {
				video.onloadedmetadata = resolve;
			});
			video.play();
			previewCanvas.height = extractCanvas.height = video.videoHeight;
			previewCanvas.width = extractCanvas.width = video.videoWidth;
			const openCv = await (globalThis as typeof globalThis & { cv: typeof OpenCv }).cv;
			scanner = new jscanify(openCv);
			scannerState = 'searching';
			scanImageTimer = setTimeout(scanImageFromVideo, 1);
		} catch (error) {
			permissionError = 'Error when using devices: ' + error;
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		<section class="grid w-full grid-rows-1 place-items-center md:grid-cols-2">
			<div
				class="grid w-full grid-cols-1 grid-rows-1 place-items-center border border-red-400 [grid-area:1/1/1/1]"
			>
				<video bind:this={video} class="[grid-area:1/1/2/2]" playsinline>
					<track kind="captions" />
				</video>
				<canvas bind:this={highlightCanvas} class="[grid-area:1/1/2/2]"></canvas>
			</div>
			<div class="border border-lime-400">
				<canvas bind:this={extractCanvas} class="[grid-area:2/2/2/2]"></canvas>
			</div>
		</section>
		{#if scannerState === 'initializing'}
			<div>Waiting for OpenCV</div>
		{:else if scannerState === 'no-input-device'}
			<div>No input device found</div>
		{:else if scannerState === 'needs-permission'}
			<button class="p-4" onclick={startScanning}>Start scanning</button>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'searching' || scannerState === 'scanning'}
			<button class="p-4" onclick={stopScanning}>Stop scanning</button>
			{#if availableCameras.length > 1}
				<button class="p-4" onclick={nextCamera}>Next camera</button>
			{/if}
		{:else if scannerState === 'processing'}
			<div>Please wait...</div>
		{:else if scannerState === 'processed'}
			<div>Specific format or as big as it is?</div>
			<button onclick={() => transformToPdf(processedImage)}>Transform as it is</button>
			<button onclick={() => transformToPdf(processedImage, { format: 'A4' })}
				>Transform into A4</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
		{/if}
	</FullWidthSection>
</PageLayout>

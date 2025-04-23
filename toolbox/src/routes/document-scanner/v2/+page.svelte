<script lang="ts">
	import { base } from '$app/paths';
	import FullBreakoutSection from '$lib/common/FullBreakoutSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import type { OpenCv } from '$lib/tools/document-scanner/jscanify';
	import { onMount } from 'svelte';
	import DocumentScanner, { type ExtractedImage } from './DocumentScanner.svelte';
	import DocumentSelector from './DocumentSelector.svelte';

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
	let openCv = $state<typeof OpenCv>();
	let selectedCameraIndex = $state<number>();
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let extractedImages = $state<Array<ExtractedImage>>([]);

	function stopCurrentCamera() {
		cameraStream?.getTracks().forEach((track) => track.stop());
		cameraStream = undefined;
	}

	async function nextCamera() {
		if (selectedCameraIndex === undefined) {
			selectedCameraIndex = -1;
		}
		selectedCameraIndex = (selectedCameraIndex + 1) % availableCameras.length;
		stopCurrentCamera();
		startScanning();
	}

	async function startScanning() {
		console.log('startScanning()');

		try {
			permissionError = undefined;
			const constraint =
				selectedCameraIndex === undefined
					? { facingMode: 'environment' }
					: { deviceId: availableCameras[selectedCameraIndex].deviceId };
			cameraStream = await navigator.mediaDevices.getUserMedia({
				video: { ...constraint, width: 2880, height: 1800 }
			});
			if (!cameraStream) {
				throw Error('No camera found');
			}
			console.log('selecting camera index');
			selectedCameraIndex =
				availableCameras.findIndex((camera) =>
					cameraStream?.getTracks().some((track) => track.label === camera.label)
				) ?? 0;
			console.log('cameraStream = ?', cameraStream);
			console.log('openCv = ?', openCv);
			scannerState = 'scanning';
		} catch (error) {
			console.log('got an error starting to scan', error);
			permissionError = 'Error when using devices: ' + error;
		}
	}

	onMount(async () => {
		await new Promise<void>((resolve, reject) => {
			const openCvScript = document.createElement('script');
			openCvScript.async = true;
			openCvScript.src = `${base}/vendor/opencv.js`;
			openCvScript.onload = () => {
				scannerState =
					'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
						? 'needs-permission'
						: 'error-no-input-device';
				resolve();
			};
			openCvScript.onerror = (error) => {
				reject(error);
			};
			document.body.appendChild(openCvScript);
		});
		openCv = await (globalThis as typeof globalThis & { cv: typeof OpenCv }).cv;
		const devices = await navigator.mediaDevices.enumerateDevices();
		availableCameras = devices.filter((device) => device.kind === 'videoinput');
	});
</script>

<PageLayout backLink="{base}/">
	<FullBreakoutSection class="px-8">
		{#if scannerState === 'initializing'}
			<div>Waiting for OpenCV</div>
		{:else if scannerState === 'error-no-input-device'}
			<div>No input device found</div>
		{:else if scannerState === 'needs-permission'}
			<button class="p-4" onclick={startScanning}>Start scanning</button>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'scanning' && cameraStream && openCv}
			<DocumentScanner
				videoStream={cameraStream}
				{openCv}
				onscan={(image, cornerPoints) => {
					extractedImages = [
						...extractedImages,
						{ source: image, cornerPoints, extracted: false, result: new OffscreenCanvas(0, 0) }
					];
				}}
				onclose={() => {
					stopCurrentCamera();
					scannerState = 'processing';
				}}
			/>
			{#if availableCameras.length > 1}
				<button class="p-4" onclick={nextCamera}>Next camera</button>
			{/if}
		{:else if scannerState === 'processing' && openCv}
			{#each extractedImages as image, index}
				<div
					class="relative border-4"
					class:border-transparent={!image.extracted}
					class:border-green-400={image.extracted}
				>
					<button
						class="absolute top-4 right-4 p-4"
						onclick={() => {
							extractedImages[index] = { ...extractedImages[index], extracted: true };
						}}>✅</button
					>
					<DocumentSelector
						{openCv}
						enabled={!image.extracted}
						image={image.source}
						initialCornerPoints={image.cornerPoints}
						onselect={(cornerPoints) => {
							extractedImages[index].result.width =
								Math.max(cornerPoints.topRightCorner.x, cornerPoints.bottomRightCorner.x) -
								Math.min(cornerPoints.topLeftCorner.x, cornerPoints.bottomLeftCorner.x);
							extractedImages[index].result.height =
								Math.max(cornerPoints.bottomLeftCorner.y, cornerPoints.bottomRightCorner.y) -
								Math.min(cornerPoints.topLeftCorner.y, cornerPoints.topRightCorner.y);
							extractedImages[index] = { ...extractedImages[index], cornerPoints };
						}}
					/>
				</div>
			{/each}
			<button
				onclick={() => {
					// put all extracted images into a PDF
					scannerState = 'result';
				}}>Download</button
			>
		{:else if scannerState === 'processed'}
			{#each extractedImages as image, index}
				<canvas id="page-{index}"></canvas>
			{/each}
			<button
				onclick={() => {
					// downloadResult();
				}}>Download</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
		{/if}
	</FullBreakoutSection>
</PageLayout>

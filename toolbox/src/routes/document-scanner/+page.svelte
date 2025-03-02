<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import jscanify from 'jscanify';
	import { onMount } from 'svelte';

	let scannerState = $state<
		| 'needs-permission'
		| 'no-input-device'
		| 'searching'
		| 'scanning'
		| 'processing'
		| 'processed'
		| 'result'
	>(
		'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
			? 'needs-permission'
			: 'no-input-device'
	);
	let permissionError = $state<string>();
	let cameraStream = $state<MediaStream>();
	let selectedCameraIndex = $state<number>();
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let processedImage = $state(new Uint8Array());

	const scanner = new jscanify();
	let video: HTMLVideoElement;
	let previewCanvas: HTMLCanvasElement;
	let resultCanvasDiv: HTMLDivElement;
	let scanImageTimer: ReturnType<typeof setTimeout> | undefined = undefined;

	onMount(async () => {
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

	const SCAN_IMAGE_TIME_IN_MS = 500;
	function scanImageFromVideo() {
		previewCanvas.getContext('2d')?.drawImage(video, 0, 0, video.scrollWidth, video.scrollHeight);
		const newResultCanvas = scanner.highlightPaper(previewCanvas);
		resultCanvasDiv.innerHTML = newResultCanvas.outerHTML;
		setTimeout(scanImageFromVideo, SCAN_IMAGE_TIME_IN_MS);
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
			video.play();
			scannerState = 'searching';
			scanImageFromVideo();
		} catch (error) {
			permissionError = 'Error when using devices: ' + error;
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		<div class="relative aspect-square w-full">
			<video class="absolute inset-0" bind:this={video} playsinline>
				<track kind="captions" />
			</video>
			<canvas class="absolute inset-0" bind:this={previewCanvas}></canvas>
			<div bind:this={resultCanvasDiv} class="absolute inset-0"></div>
		</div>
		{#if scannerState === 'no-input-device'}
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

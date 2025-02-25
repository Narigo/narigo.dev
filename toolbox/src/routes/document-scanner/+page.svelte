<script lang="ts">
	import { base } from '$app/paths';
	import FullWidthSection from '$lib/common/FullWidthSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
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
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let selectedCameraIndex = $state(0);
	let processedImage = $state(new Uint8Array());

	let video: HTMLVideoElement;

	onMount(async () => {
		console.log('enumerating devices');
		const devices = await navigator.mediaDevices.enumerateDevices();
		availableCameras = devices.filter((device) => device.kind === 'videoinput');
		console.log('found cameras', $state.snapshot(availableCameras));
	});

	async function transformToPdf(
		image: Uint8Array,
		_options: { format: 'A4' | 'auto' } = { format: 'A4' }
	) {
		console.log('should transform to pdf');
	}

	async function askForPermission() {
		try {
			permissionError = undefined;
			const selectedCameraId = availableCameras[selectedCameraIndex].deviceId;
			const cameraStream = await navigator.mediaDevices.getDisplayMedia({
				video: { deviceId: selectedCameraId }
			});
			console.log('found a stream', cameraStream.id);
			video.srcObject = cameraStream;
			video.play();
		} catch (error) {
			permissionError = 'Error when using devices: ' + error;
		}
	}
</script>

<PageLayout backLink="{base}/">
	<FullWidthSection>
		<video class="aspect-square w-full" bind:this={video} playsinline></video>
		{#if scannerState === 'no-input-device'}
			<div>No input device found</div>
		{:else if scannerState === 'needs-permission'}
			<button class="p-4" onclick={askForPermission}>Start scanning</button>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'searching' || scannerState === 'scanning'}
			<div>Should see something in video above...</div>
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

<script lang="ts">
	import jsPdf from 'jspdf';
	import { base } from '$app/paths';
	import FullBreakoutSection from '$lib/common/FullBreakoutSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import { extractPaper, type OpenCv } from '$lib/tools/document-scanner/jscanify';
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
		| 'result'
	>('initializing');
	let permissionError = $state<string>();
	let cameraStream = $state<MediaStream>();
	let openCv = $state<typeof OpenCv>();
	let selectedCameraIndex = $state<number>();
	let availableCameras = $state<Array<MediaDeviceInfo>>([]);
	let extractedImages = $state<Array<ExtractedImage>>([]);
	let filename = $state<string>(getDefaultFilename());
	let resultPdf = $state<string>('');

	function getDefaultFilename(): string {
		const today = new Date();
		const y = today.getFullYear();
		const m = `${today.getMonth()}`.padStart(2, '0');
		const d = `${today.getDate()}`.padStart(2, '9');
		return `${y}-${m}-${d}.pdf`;
	}

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
			selectedCameraIndex =
				availableCameras.findIndex((camera) =>
					cameraStream?.getTracks().some((track) => track.label === camera.label)
				) ?? 0;
			scannerState = 'scanning';
		} catch (error) {
			console.log('got an error starting to scan', error);
			permissionError = 'Error when using devices: ' + error;
		}
	}

	async function preparePdf(filename: string) {
		const pdf = new jsPdf();
		// jsPdf creates a page. Since we're walking through the extracted images only,
		// we don't need this first extra page.
		pdf.deletePage(1);
		for (const image of extractedImages) {
			if (!image.result) {
				continue;
			}
			console.log('create page from image', image);
			pdf.addPage([image.result.width, image.result.height]);
			const dataUrl = image.result.toDataURL('image/jpeg', 1);
			pdf.addImage(dataUrl, 'JPEG', 0, 0, image.result.width, image.result.height);
		}
		resultPdf = pdf.output('datauristring', { filename });
		scannerState = 'result';
	}

	async function loadOpenCv(): Promise<typeof OpenCv> {
		const potentiallyOpenCv = (globalThis as typeof globalThis & { cv?: typeof OpenCv }).cv;
		if (potentiallyOpenCv) {
			console.log('found an existing openCv to return');
			return potentiallyOpenCv;
		}
		await new Promise<void>((resolve, reject) => {
			const openCvScript = document.createElement('script');
			openCvScript.async = true;
			openCvScript.src = `${base}/vendor/opencv.js`;
			openCvScript.onload = () => {
				resolve();
			};
			openCvScript.onerror = (error) => {
				reject(error);
			};
			document.body.appendChild(openCvScript);
		});
		return await (globalThis as typeof globalThis & { cv: typeof OpenCv }).cv;
	}
	onMount(async () => {
		openCv = await loadOpenCv();
		scannerState =
			'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices
				? 'needs-permission'
				: 'error-no-input-device';
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
			<button class="rounded border bg-gray-100 p-4" onclick={startScanning}>Start scanning</button>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'scanning' && cameraStream && openCv}
			<DocumentScanner
				videoStream={cameraStream}
				{openCv}
				onscan={(image, cornerPoints) => {
					extractedImages = [...extractedImages, { source: image, cornerPoints }];
				}}
				onclose={() => {
					stopCurrentCamera();
					scannerState = 'processing';
				}}
			/>
			{#if availableCameras.length > 1}
				<button class="rounded border bg-gray-100 p-4" onclick={nextCamera}>Next camera</button>
			{/if}
		{:else if scannerState === 'processing' && openCv}
			<ol class="flex flex-row gap-4">
				{#each extractedImages as image, index}
					{#if image.result}
						<li
							class="relative max-h-16 max-w-16"
							style="aspect-ratio:{image.result!.height}/{image.result!.width}"
						>
							<button
								class="h-4 w-4"
								onclick={() =>
									(extractedImages = [
										...extractedImages.slice(0, index),
										...extractedImages.slice(index + 1)
									])}>x</button
							>
							<button class="h-full" onclick={() => (image.result = undefined)}
								><img
									class="max-h-full"
									src={image.result.toDataURL('image/jpeg', 0.9)}
									alt="Scanned image number {index}"
								/></button
							>
						</li>
					{/if}
				{/each}
				<li class="relative max-h-32 max-w-32" style="aspect-ratio:3/2">
					<button class="h-full w-full border bg-gray-100" onclick={() => startScanning()}>+</button
					>
				</li>
			</ol>
			<section class="isolate grid grid-cols-1 grid-rows-1">
				{#each extractedImages as image, index}
					{#if !image.result}
						<div
							style="--index:{extractedImages.length - index}"
							class="relative z-[var(--index)] border-4 [grid-area:1/1/2/2]"
							class:border-transparent={!image.result}
							class:border-green-400={image.result}
						>
							<DocumentSelector
								{openCv}
								image={image.source}
								initialCornerPoints={image.cornerPoints}
								onselect={(cornerPoints) => {
									if (!openCv) {
										return;
									}
									const width =
										Math.max(cornerPoints.topRightCorner.x, cornerPoints.bottomRightCorner.x) -
										Math.min(cornerPoints.topLeftCorner.x, cornerPoints.bottomLeftCorner.x);
									const height =
										Math.max(cornerPoints.bottomLeftCorner.y, cornerPoints.bottomRightCorner.y) -
										Math.min(cornerPoints.topLeftCorner.y, cornerPoints.topRightCorner.y);
									const sourceImage = document.createElement('canvas');
									sourceImage.width = extractedImages[index].source.width;
									sourceImage.height = extractedImages[index].source.height;
									const ctx = sourceImage.getContext('2d');
									ctx?.putImageData(extractedImages[index].source, 0, 0);
									extractedImages[index].result = extractPaper(
										openCv,
										sourceImage,
										extractedImages[index].cornerPoints,
										{ width, height }
									);
									extractedImages[index].cornerPoints = cornerPoints;
								}}
							/>
						</div>
					{/if}
				{/each}
			</section>

			<button
				class="rounded border bg-gray-100 p-4"
				onclick={() => {
					scannerState = 'scanning';
				}}>Scan another page</button
			>

			<button
				class="rounded border bg-gray-100 p-4"
				onclick={() => {
					// put all extracted images into a PDF
					if (extractedImages.some((image) => !image.result)) {
						if (
							!confirm(`Not all images were set to ready.
Are you sure you want to download the PDF already?`)
						) {
							return;
						}
					}
					console.log(
						'not extracted:',
						extractedImages.filter((i) => !i.result)
					);
					preparePdf(filename);
				}}>Create Download Link</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
			<a href={resultPdf} download>{filename}</a>
			<button onclick={() => startScanning()}>Scan another page</button>
		{/if}
	</FullBreakoutSection>
</PageLayout>

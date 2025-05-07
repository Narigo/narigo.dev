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
		return 'file.pdf';
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

	async function downloadExtractedAsPdf(filename: string) {
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
		pdf.output('dataurlnewwindow', { filename });
		resultPdf = pdf.output('datauristring');
		scannerState = 'result';
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
					extractedImages = [...extractedImages, { source: image, cornerPoints }];
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
			<ol class="flex flex-row gap-4">
				{#each extractedImages as image, index}
					{#if image.result}
						<li
							class="max-h-16 max-w-16"
							style="aspect-ratio:{image.result!.height}/{image.result!.width}"
						>
							<button onclick={() => (image.result = undefined)}
								><img
									src={image.result.toDataURL('image/jpeg', 0.9)}
									alt="Scanned image number {index}"
								/></button
							>
						</li>
					{/if}
				{/each}
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
					downloadExtractedAsPdf(filename);
				}}>Download</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
			<a href={resultPdf} download>{filename}</a>
		{/if}
	</FullBreakoutSection>
</PageLayout>

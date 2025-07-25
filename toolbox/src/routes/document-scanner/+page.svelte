<script lang="ts">
	import jsPdf from 'jspdf';
	import { base } from '$app/paths';
	import FullBreakoutSection from '$lib/common/FullBreakoutSection.svelte';
	import PageLayout from '$lib/common/PageLayout.svelte';
	import {
		extractPaper,
		type CornerPoints,
		type OpenCv
	} from '$lib/tools/document-scanner/jscanify';
	import { onMount } from 'svelte';
	import DocumentScanner, { type ExtractedImage } from './DocumentScanner.svelte';
	import DocumentSelector from './DocumentSelector.svelte';
	import PreviewBar from './PreviewBar.svelte';
	import { ensureEndsWith } from '$lib/tools/document-scanner/ensure-ends-with';
	import LoadingScreen from './LoadingScreen.svelte';
	import * as m from '$lib/paraglide/messages.js';

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
	let finalFilename = $derived(ensureEndsWith('.pdf', filename));
	let resultPdf = $state<string>('');

	function getDefaultFilename(): string {
		const today = new Date();
		const y = today.getFullYear();
		const m = `${today.getMonth() + 1}`.padStart(2, '0');
		const d = `${today.getDate()}`.padStart(2, '0');
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

	function extractImage(
		openCv: typeof OpenCv,
		source: ImageData,
		cornerPoints: CornerPoints
	): HTMLCanvasElement {
		const width =
			Math.max(cornerPoints.topRightCorner.x, cornerPoints.bottomRightCorner.x) -
			Math.min(cornerPoints.topLeftCorner.x, cornerPoints.bottomLeftCorner.x);
		const height =
			Math.max(cornerPoints.bottomLeftCorner.y, cornerPoints.bottomRightCorner.y) -
			Math.min(cornerPoints.topLeftCorner.y, cornerPoints.topRightCorner.y);
		const sourceImage = document.createElement('canvas');
		sourceImage.width = source.width;
		sourceImage.height = source.height;
		const ctx = sourceImage.getContext('2d');
		ctx?.putImageData(source, 0, 0);
		return extractPaper(openCv, sourceImage, cornerPoints, {
			width,
			height
		});
	}

	onMount(async () => {
		const hasMediaDevices = 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices;
		if (!hasMediaDevices) {
			scannerState = 'error-no-input-device';
			return;
		}
		const devices = await navigator.mediaDevices.enumerateDevices();
		availableCameras = devices.filter((device) => device.kind === 'videoinput');

		openCv = await loadOpenCv();

		const { state: cameraPermissionState } = await navigator.permissions.query({ name: 'camera' });
		if (cameraPermissionState === 'denied' || cameraPermissionState === 'prompt') {
			scannerState = 'needs-permission';
			return;
		}

		startScanning();
	});
</script>

<PageLayout backLink="{base}/">
	<FullBreakoutSection class="px-8">
		<section class="preview">
			<h2 class="sr-only">{m['tools.documentScanner.preview']()}</h2>
			<PreviewBar
				images={extractedImages}
				removeImage={(index: number) => {
					extractedImages = [
						...extractedImages.slice(0, index),
						...extractedImages.slice(index + 1)
					];
				}}
				addImage={() => {
					startScanning();
				}}
			/>
		</section>
		{#if scannerState === 'initializing'}
			<div class="loader grid h-full w-full place-items-center">
				<LoadingScreen>
					<p>Waiting for OpenCV</p>
					<p>...and maybe something else</p>
				</LoadingScreen>
			</div>
		{:else if scannerState === 'error-no-input-device'}
			<div>No input device found</div>
		{:else if scannerState === 'needs-permission'}
			<button class="start rounded border bg-gray-100 p-4" onclick={startScanning}
				>Start scanning (asks for permission to use camera)</button
			>
			{#if permissionError}
				<p>{permissionError}</p>
			{/if}
		{:else if scannerState === 'scanning' && cameraStream && openCv}
			<DocumentScanner
				videoStream={cameraStream}
				{openCv}
				onscan={(image, cornerPoints) => {
					if (!openCv) {
						return;
					}
					const result = extractImage(openCv, image, cornerPoints);
					extractedImages = [...extractedImages, { source: image, cornerPoints, result }];
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
			<section class="isolate grid grid-cols-1 grid-rows-1">
				{#each extractedImages as image, index (image.source)}
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
									extractedImages[index].cornerPoints = cornerPoints;
									extractedImages[index].result = extractImage(
										openCv,
										extractedImages[index].source,
										cornerPoints
									);
								}}
							/>
						</div>
					{/if}
				{/each}
			</section>

			<input type="text" name="filename" bind:value={filename} />
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
					preparePdf(finalFilename);
					const hiddenAnchor = document.createElement('a');
					hiddenAnchor.setAttribute('download', finalFilename);
					hiddenAnchor.setAttribute('href', resultPdf);
					hiddenAnchor.click();
				}}>Create Download Link</button
			>
		{:else if scannerState === 'result'}
			<div>Here should be the PDF:</div>
			<a href={resultPdf} download={finalFilename}>{finalFilename}</a>
			<button class="rounded border bg-gray-100 p-4" onclick={() => startScanning()}
				>Scan another page</button
			>
		{/if}
	</FullBreakoutSection>
</PageLayout>

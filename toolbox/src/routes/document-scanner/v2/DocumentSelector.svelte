<script lang="ts">
	import { onMount } from 'svelte';
	import type { ExtractedImage } from './DocumentScanner.svelte';
	import { distance, type Point2d, type CornerPoints } from '$lib/tools/document-scanner/jscanify';

	interface Props {
		image: ImageData;
		initialCornerPoints: CornerPoints;
		onselect: (cornerPoints: CornerPoints) => void;
	}
	let { image, initialCornerPoints, onselect }: Props = $props();

	let changingExtraction = $state<boolean>(false);
	let extractionPartToChange = $state<keyof CornerPoints>('topLeftCorner');
	let extractionChangeStartedAt = $state<Point2d>();
	let cornerPoints = $state<CornerPoints>(initialCornerPoints);
	let completeImage: HTMLCanvasElement;
	let highlightedPaper: HTMLCanvasElement;

	onMount(() => {
		completeImage.width = highlightedPaper.width = image.width;
		completeImage.height = highlightedPaper.height = image.height;
		const ctx = completeImage.getContext('2d');
		ctx?.putImageData(image, 0, 0);

		drawExtractedImageSelection();
	});

	function drawExtractedImageSelection() {
		const ctx = highlightedPaper.getContext('2d');
		if (!ctx) {
			console.error('Could not get context of highlightedPaper');
			return;
		}
		if (!cornerPoints) {
			console.error('Could not find any cornerPoints');
			return;
		}

		const midPointTop = {
			x:
				Math.min(cornerPoints.topLeftCorner.x, cornerPoints.topRightCorner.x) +
				Math.abs(cornerPoints.topLeftCorner.x - cornerPoints.topRightCorner.x) / 2,
			y:
				Math.min(cornerPoints.topLeftCorner.y, cornerPoints.topRightCorner.y) +
				Math.abs(cornerPoints.topLeftCorner.y - cornerPoints.topRightCorner.y) / 2
		};
		const midPointBottom = {
			x:
				Math.min(cornerPoints.bottomLeftCorner.x, cornerPoints.bottomRightCorner.x) +
				Math.abs(cornerPoints.bottomLeftCorner.x - cornerPoints.bottomRightCorner.x) / 2,
			y:
				Math.min(cornerPoints.bottomLeftCorner.y, cornerPoints.bottomRightCorner.y) +
				Math.abs(cornerPoints.bottomLeftCorner.y - cornerPoints.bottomRightCorner.y) / 2
		};
		const midPointLeft = {
			x:
				Math.min(cornerPoints.topLeftCorner.x, cornerPoints.bottomLeftCorner.x) +
				Math.abs(cornerPoints.topLeftCorner.x - cornerPoints.bottomLeftCorner.x) / 2,
			y:
				Math.min(cornerPoints.topLeftCorner.y, cornerPoints.bottomLeftCorner.y) +
				Math.abs(cornerPoints.topLeftCorner.y - cornerPoints.bottomLeftCorner.y) / 2
		};
		const midPointRight = {
			x:
				Math.min(cornerPoints.topRightCorner.x, cornerPoints.bottomRightCorner.x) +
				Math.abs(cornerPoints.topRightCorner.x - cornerPoints.bottomRightCorner.x) / 2,
			y:
				Math.min(cornerPoints.topRightCorner.y, cornerPoints.bottomRightCorner.y) +
				Math.abs(cornerPoints.topRightCorner.y - cornerPoints.bottomRightCorner.y) / 2
		};

		ctx.clearRect(0, 0, highlightedPaper.width, highlightedPaper.height);
		ctx.drawImage(completeImage, 0, 0);
		drawLines(ctx, cornerPoints, 'black', 5);
		drawCorners(ctx, cornerPoints, 'black', 10);
		drawLines(ctx, cornerPoints, 'white', 2);
		drawCorners(ctx, cornerPoints, 'white', 8);
		function drawLines(
			ctx: CanvasRenderingContext2D,
			corners: CornerPoints,
			strokeStyle: string,
			lineWidth: number
		) {
			ctx.beginPath();
			ctx.fillStyle = '';
			ctx.strokeStyle = strokeStyle;
			ctx.lineWidth = lineWidth;
			ctx.moveTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.lineTo(corners.topRightCorner.x, corners.topRightCorner.y);
			ctx.lineTo(corners.bottomRightCorner.x, corners.bottomRightCorner.y);
			ctx.lineTo(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y);
			ctx.lineTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.moveTo(midPointTop.x, midPointTop.y);
			ctx.lineTo(midPointBottom.x, midPointBottom.y);
			ctx.moveTo(midPointLeft.x, midPointLeft.y);
			ctx.lineTo(midPointRight.x, midPointRight.y);
			ctx.stroke();
			ctx.closePath();
		}
		function drawCorners(
			ctx: CanvasRenderingContext2D,
			corners: CornerPoints,
			fillStyle: string,
			size: number
		) {
			ctx.beginPath();
			ctx.fillStyle = extractionPartToChange === 'topLeftCorner' ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartToChange === 'topLeftCorner' ? 'lime' : fillStyle;
			ctx.moveTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.arc(corners.topLeftCorner.x, corners.topLeftCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartToChange === 'topRightCorner' ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartToChange === 'topRightCorner' ? 'lime' : fillStyle;
			ctx.moveTo(corners.topRightCorner.x, corners.topRightCorner.y);
			ctx.arc(corners.topRightCorner.x, corners.topRightCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartToChange === 'bottomRightCorner' ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartToChange === 'bottomRightCorner' ? 'lime' : fillStyle;
			ctx.moveTo(corners.bottomRightCorner.x, corners.bottomRightCorner.y);
			ctx.arc(corners.bottomRightCorner.x, corners.bottomRightCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartToChange === 'bottomLeftCorner' ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartToChange === 'bottomLeftCorner' ? 'lime' : fillStyle;
			ctx.moveTo(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y);
			ctx.arc(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
		}
	}

	function isInsideExtractedPaper(coords: Point2d): boolean {
		return false;
	}

	function getPartToChange(coords: Point2d): keyof CornerPoints {
		if (!cornerPoints) {
			throw Error('No corner points set!');
		}
		const dtl = distance(coords, cornerPoints.topLeftCorner);
		const dtr = distance(coords, cornerPoints.topRightCorner);
		const dbl = distance(coords, cornerPoints.bottomLeftCorner);
		const dbr = distance(coords, cornerPoints.bottomRightCorner);
		const min = Math.min(dtl, dtr, dbl, dbr);
		if (min === dtl) {
			return 'topLeftCorner';
		}
		if (min === dtr) {
			return 'topRightCorner';
		}
		if (min === dtl) {
			return 'bottomLeftCorner';
		}
		return 'bottomRightCorner';
	}
</script>

<section>
	<button
		aria-label="Scanner start / stop"
		class="grid max-h-dvh grid-cols-1 grid-rows-1 place-items-center"
	>
		<canvas bind:this={completeImage} id="hlpaper" class="max-h-full [grid-area:1/1/2/2]"></canvas>
		<canvas
			bind:this={highlightedPaper}
			id="hlpaper"
			class="max-h-full [grid-area:1/1/2/2]"
			onpointerdown={(event) => {
				if (isInsideExtractedPaper({ x: event.clientX, y: event.clientY })) {
					changingExtraction = true;
					extractionPartToChange = getPartToChange({ x: event.clientX, y: event.clientY });
					extractionChangeStartedAt = { x: event.clientX, y: event.clientY };
				} else {
					onselect(cornerPoints);
				}
			}}
			onpointerup={(event) => {
				changingExtraction = false;
				drawExtractedImageSelection();
			}}
			onpointerout={(event) => {
				changingExtraction = false;
				drawExtractedImageSelection();
			}}
			onpointermove={(event) => {
				if (changingExtraction) {
					const coords = { x: event.clientX, y: event.clientY };
					const newCornerPoints = cornerPoints;
					newCornerPoints[extractionPartToChange].x = coords.x;
					newCornerPoints[extractionPartToChange].y = coords.y;
					cornerPoints = newCornerPoints;
					drawExtractedImageSelection();
				}
			}}
		></canvas>
	</button>
</section>

<script lang="ts">
	import { onMount } from 'svelte';
	import {
		distance,
		isInsidePoints,
		type Point2d,
		type CornerPoints,
		type OpenCv
	} from '$lib/tools/document-scanner/jscanify';

	interface Props {
		image: ImageData;
		initialCornerPoints: CornerPoints;
		onselect: (cornerPoints: CornerPoints) => void;
		openCv: typeof OpenCv;
	}
	let { image, initialCornerPoints, onselect, openCv }: Props = $props();

	let changingExtraction = $state<boolean>(false);
	let extractionPartsToChange = $state<Array<keyof CornerPoints>>([]);
	let extractionChangeDistances = $state<Record<keyof CornerPoints, Point2d>>({
		topLeftCorner: { x: 0, y: 0 },
		topRightCorner: { x: 0, y: 0 },
		bottomLeftCorner: { x: 0, y: 0 },
		bottomRightCorner: { x: 0, y: 0 }
	});
	let cornerPoints = $state<CornerPoints>(initialCornerPoints);
	let completeImage: HTMLCanvasElement;
	let highlightedPaper: HTMLCanvasElement;

	onMount(() => {
		completeImage.width = highlightedPaper.width = image.width;
		completeImage.height = highlightedPaper.height = image.height;
		const ctx = completeImage.getContext('2d');
		ctx?.putImageData(image, 0, 0);

		drawExtractedImageSelection();

		document.body.addEventListener('touchstart', handlerToPreventScrolling, {
			passive: false,
			capture: false
		});

		return () => {
			document.body.removeEventListener('touchstart', handlerToPreventScrolling);
		};
	});

	function handlerToPreventScrolling(event: TouchEvent) {
		if (changingExtraction) {
			event.preventDefault();
		}
	}

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
			ctx.fillStyle = extractionPartsToChange.includes('topLeftCorner') ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartsToChange.includes('topLeftCorner') ? 'lime' : fillStyle;
			ctx.moveTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.arc(corners.topLeftCorner.x, corners.topLeftCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartsToChange.includes('topRightCorner') ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartsToChange.includes('topRightCorner') ? 'lime' : fillStyle;
			ctx.moveTo(corners.topRightCorner.x, corners.topRightCorner.y);
			ctx.arc(corners.topRightCorner.x, corners.topRightCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartsToChange.includes('bottomRightCorner') ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartsToChange.includes('bottomRightCorner') ? 'lime' : fillStyle;
			ctx.moveTo(corners.bottomRightCorner.x, corners.bottomRightCorner.y);
			ctx.arc(corners.bottomRightCorner.x, corners.bottomRightCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
			ctx.beginPath();
			ctx.fillStyle = extractionPartsToChange.includes('bottomLeftCorner') ? 'lime' : fillStyle;
			ctx.strokeStyle = extractionPartsToChange.includes('bottomLeftCorner') ? 'lime' : fillStyle;
			ctx.moveTo(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y);
			ctx.arc(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y, size, 0, 360);
			ctx.fill();
			ctx.closePath();
		}
	}

	function getPartsToChange(coords: Point2d): Array<keyof CornerPoints> {
		if (!cornerPoints) {
			throw Error('No corner points set!');
		}
		const dtl = distance(coords, cornerPoints.topLeftCorner);
		const dtr = distance(coords, cornerPoints.topRightCorner);
		const dbl = distance(coords, cornerPoints.bottomLeftCorner);
		const dbr = distance(coords, cornerPoints.bottomRightCorner);
		const min = Math.min(dtl, dtr, dbl, dbr);
		const minLeft = Math.min(cornerPoints.topLeftCorner.x, cornerPoints.bottomLeftCorner.x);
		const minTop = Math.min(cornerPoints.topLeftCorner.y, cornerPoints.topRightCorner.y);
		const maxLeft = Math.max(cornerPoints.topRightCorner.x, cornerPoints.bottomRightCorner.x);
		const maxTop = Math.max(cornerPoints.bottomLeftCorner.y, cornerPoints.bottomRightCorner.y);
		const isInCenter =
			Math.abs(maxLeft - coords.x - (coords.x - minLeft)) < (maxLeft - minLeft) / 4 &&
			Math.abs(maxTop - coords.y - (coords.y - minTop)) < (maxTop - minTop) / 4;
		if (isInCenter) {
			return ['topLeftCorner', 'topRightCorner', 'bottomLeftCorner', 'bottomRightCorner'];
		}
		if (min === dtl) {
			return ['topLeftCorner'];
		}
		if (min === dtr) {
			return ['topRightCorner'];
		}
		if (min === dbl) {
			return ['bottomLeftCorner'];
		}
		return ['bottomRightCorner'];
	}
</script>

<section>
	<button
		aria-label="Scanner start / stop"
		class="grid max-h-dvh grid-cols-1 grid-rows-1 place-items-center"
	>
		<canvas bind:this={completeImage} class="max-h-full [grid-area:1/1/2/2]"></canvas>
		<canvas
			bind:this={highlightedPaper}
			class="max-h-full [grid-area:1/1/2/2]"
			onpointerdown={(event) => {
				const rect = highlightedPaper.getBoundingClientRect();
				const scaleX = highlightedPaper.width / rect.width;
				const scaleY = highlightedPaper.height / rect.height;
				const coords = {
					x: (event.clientX - rect.left) * scaleX,
					y: (event.clientY - rect.top) * scaleY
				};
				if (isInsidePoints(openCv, coords, cornerPoints)) {
					changingExtraction = true;
					extractionPartsToChange = getPartsToChange(coords);
					extractionChangeDistances = {
						topLeftCorner: {
							x: cornerPoints.topLeftCorner.x - coords.x,
							y: cornerPoints.topLeftCorner.y - coords.y
						},
						topRightCorner: {
							x: cornerPoints.topRightCorner.x - coords.x,
							y: cornerPoints.topRightCorner.y - coords.y
						},
						bottomLeftCorner: {
							x: cornerPoints.bottomLeftCorner.x - coords.x,
							y: cornerPoints.bottomLeftCorner.y - coords.y
						},
						bottomRightCorner: {
							x: cornerPoints.bottomRightCorner.x - coords.x,
							y: cornerPoints.bottomRightCorner.y - coords.y
						}
					};
				} else {
					onselect(cornerPoints);
				}
			}}
			onpointerup={() => {
				changingExtraction = false;
				drawExtractedImageSelection();
			}}
			onpointerout={() => {
				changingExtraction = false;
				drawExtractedImageSelection();
			}}
			onpointermove={(event) => {
				event.preventDefault();
				event.stopPropagation();
				const rect = highlightedPaper.getBoundingClientRect();
				const scaleX = highlightedPaper.width / rect.width;
				const scaleY = highlightedPaper.height / rect.height;
				const coords = {
					x: (event.clientX - rect.left) * scaleX,
					y: (event.clientY - rect.top) * scaleY
				};
				if (changingExtraction) {
					for (const extractionPartToChange of extractionPartsToChange) {
						const newCornerPoints = cornerPoints;
						newCornerPoints[extractionPartToChange].x =
							coords.x + extractionChangeDistances[extractionPartToChange].x;
						newCornerPoints[extractionPartToChange].y =
							coords.y + extractionChangeDistances[extractionPartToChange].y;
						cornerPoints = newCornerPoints;
					}
					drawExtractedImageSelection();
				} else if (isInsidePoints(openCv, coords, cornerPoints)) {
					extractionPartsToChange = getPartsToChange(coords);
					drawExtractedImageSelection();
				} else {
					extractionPartsToChange = [];
					drawExtractedImageSelection();
				}
			}}
		></canvas>
	</button>
</section>

<script lang="ts">
	import type {
		CornerPoints,
		ImageLike,
		OpenCv,
		Point2d
	} from '$lib/tools/document-scanner/jscanify';
	import { onMount, tick } from 'svelte';

	export type ContourPoints = {
		topLeft: { x: Point2d; y: Point2d };
		topRight: { x: Point2d; y: Point2d };
		bottomLeft: { x: Point2d; y: Point2d };
		bottomRight: { x: Point2d; y: Point2d };
	};
	export type RecordedImage = {
		data: Uint8Array;
		height: number;
		width: number;
	};
	export type ExtractedImage = {
		source: RecordedImage;
		contourPoints: ContourPoints;
	};

	interface Props {
		onclose: () => void;
		onscan: (image: RecordedImage) => void;
		openCv: typeof OpenCv;
		videoStream: MediaStream;
	}

	let { openCv, videoStream }: Props = $props();

	const SCAN_IMAGE_TIME_IN_MS = 100;

	let videoFeed: HTMLVideoElement;
	let highlightedPaper: HTMLCanvasElement;
	let previewCanvas: OffscreenCanvas;
	let cornerPoints = $state<CornerPoints>();

	function findPaperContour(img: OpenCv.Mat) {
		const imgGray = new openCv.Mat();
		openCv.Canny(img, imgGray, 50, 200);

		const imgBlur = new openCv.Mat();
		openCv.GaussianBlur(imgGray, imgBlur, new openCv.Size(3, 3), 0, 0, openCv.BORDER_DEFAULT);

		const imgThresh = new openCv.Mat();
		openCv.threshold(imgBlur, imgThresh, 0, 255, openCv.THRESH_OTSU);

		let contours = new openCv.MatVector();
		let hierarchy = new openCv.Mat();

		openCv.findContours(
			imgThresh,
			contours,
			hierarchy,
			openCv.RETR_CCOMP,
			openCv.CHAIN_APPROX_SIMPLE
		);

		let maxArea = 0;
		let maxContourIndex = -1;
		for (let i = 0; i < contours.size(); ++i) {
			let contourArea = openCv.contourArea(contours.get(i));
			if (contourArea > maxArea) {
				maxArea = contourArea;
				maxContourIndex = i;
			}
		}

		const maxContour = maxContourIndex >= 0 ? contours.get(maxContourIndex) : null;

		imgGray.delete();
		imgBlur.delete();
		imgThresh.delete();
		contours.delete();
		hierarchy.delete();
		return maxContour;
	}

	function distance(p1: Point2d, p2: Point2d) {
		return Math.hypot(p1.x - p2.x, p1.y - p2.y);
	}

	function getCornerPoints(contour: NonNullable<ReturnType<typeof findPaperContour>>) {
		let rect = openCv.minAreaRect(contour);
		const center = rect.center;

		let topLeftCorner;
		let topLeftCornerDist = 0;

		let topRightCorner;
		let topRightCornerDist = 0;

		let bottomLeftCorner;
		let bottomLeftCornerDist = 0;

		let bottomRightCorner;
		let bottomRightCornerDist = 0;

		for (let i = 0; i < contour.data32S.length; i += 2) {
			const point = { x: contour.data32S[i], y: contour.data32S[i + 1] };
			const dist = distance(point, center);
			if (point.x < center.x && point.y < center.y) {
				// top left
				if (dist > topLeftCornerDist) {
					topLeftCorner = point;
					topLeftCornerDist = dist;
				}
			} else if (point.x > center.x && point.y < center.y) {
				// top right
				if (dist > topRightCornerDist) {
					topRightCorner = point;
					topRightCornerDist = dist;
				}
			} else if (point.x < center.x && point.y > center.y) {
				// bottom left
				if (dist > bottomLeftCornerDist) {
					bottomLeftCorner = point;
					bottomLeftCornerDist = dist;
				}
			} else if (point.x > center.x && point.y > center.y) {
				// bottom right
				if (dist > bottomRightCornerDist) {
					bottomRightCorner = point;
					bottomRightCornerDist = dist;
				}
			}
		}

		return {
			topLeftCorner: topLeftCorner!,
			topRightCorner: topRightCorner!,
			bottomLeftCorner: bottomLeftCorner!,
			bottomRightCorner: bottomRightCorner!
		};
	}

	function findCornerPointsOfPaper(image: ImageLike): CornerPoints | undefined {
		const img = openCv.imread(image);
		try {
			const contour = findPaperContour(img);
			if (!contour) {
				return;
			}

			const cornerPoints = getCornerPoints(contour);
			if (
				!(
					cornerPoints &&
					cornerPoints.topLeftCorner &&
					cornerPoints.topRightCorner &&
					cornerPoints.bottomLeftCorner &&
					cornerPoints.bottomRightCorner
				)
			) {
				return;
			}

			return cornerPoints;
		} finally {
			img.delete();
		}
	}

	let timerId: ReturnType<typeof setTimeout> | undefined = undefined;
	function stopScan() {
		clearTimeout(timerId);
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
		ctx.drawImage(previewCanvas, 0, 0);
		drawLines(ctx, cornerPoints, 'black', 5);
		drawLines(ctx, cornerPoints, 'white', 2);
		function drawLines(
			ctx: CanvasRenderingContext2D,
			corners: CornerPoints,
			strokeStyle: string,
			lineWidth: number
		) {
			ctx.strokeStyle = strokeStyle;
			ctx.lineWidth = lineWidth;
			ctx.beginPath();
			ctx.moveTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.lineTo(corners.topRightCorner.x, corners.topRightCorner.y);
			ctx.lineTo(corners.bottomRightCorner.x, corners.bottomRightCorner.y);
			ctx.lineTo(corners.bottomLeftCorner.x, corners.bottomLeftCorner.y);
			ctx.lineTo(corners.topLeftCorner.x, corners.topLeftCorner.y);
			ctx.moveTo(midPointTop.x, midPointTop.y);
			ctx.lineTo(midPointBottom.x, midPointBottom.y);
			ctx.moveTo(midPointLeft.x, midPointLeft.y);
			ctx.lineTo(midPointRight.x, midPointRight.y);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();
		}
	}

	onMount(() => {
		videoFeed.srcObject = videoStream;
		$inspect(videoFeed.videoWidth).with(console.log);
		$inspect(videoFeed.videoHeight).with(console.log);
		videoFeed.onloadedmetadata = () => {
			videoFeed.play();
			previewCanvas = new OffscreenCanvas(videoFeed.videoWidth, videoFeed.videoHeight);
			highlightedPaper.width = videoFeed.videoWidth;
			highlightedPaper.height = videoFeed.videoHeight;
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
		};

		function rerunHighlightPaperInVideo() {
			const previewCanvasCtx = previewCanvas.getContext('2d', { willReadFrequently: true })!;
			previewCanvasCtx.drawImage(videoFeed, 0, 0);
			cornerPoints = findCornerPointsOfPaper(previewCanvas) ?? cornerPoints;
			if (!cornerPoints) {
				timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
				return;
			}
			const ctx = highlightedPaper.getContext('2d');
			if (!ctx) {
				console.log('Could not draw on highlightedPaper canvas');
				timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
				return;
			}
			ctx.clearRect(0, 0, highlightedPaper.width, highlightedPaper.height);
			ctx.strokeStyle = 'orange';
			ctx.fillStyle = 'rgba(255, 128, 128, 0.2)';
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(cornerPoints.topLeftCorner.x, cornerPoints.topLeftCorner.y);
			ctx.lineTo(cornerPoints.topRightCorner.x, cornerPoints.topRightCorner.y);
			ctx.lineTo(cornerPoints.bottomRightCorner.x, cornerPoints.bottomRightCorner.y);
			ctx.lineTo(cornerPoints.bottomLeftCorner.x, cornerPoints.bottomLeftCorner.y);
			ctx.lineTo(cornerPoints.topLeftCorner.x, cornerPoints.topLeftCorner.y);
			ctx.fill();
			ctx.stroke();
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
		}

		return () => {
			clearTimeout(timerId);
			videoFeed.pause();
			videoFeed.srcObject = null;
		};
	});
</script>

<button
	aria-label="Scanner start / stop"
	class="grid max-h-dvh grid-cols-1 grid-rows-1"
	onclick={() => {
		stopScan();
	}}
>
	<video bind:this={videoFeed} id="videofeed" class="max-h-full [grid-area:1/1/2/2]">
		<track kind="captions" />
	</video>
	<canvas bind:this={highlightedPaper} id="hlpaper" class="max-h-full [grid-area:1/1/2/2]"></canvas>
</button>

<script lang="ts">
	import {
		distance,
		getCornerPoints,
		isInsidePoints,
		type CornerPoints,
		type ImageLike,
		type OpenCv
	} from '$lib/tools/document-scanner/jscanify';
	import { onMount } from 'svelte';

	export type ExtractedImage = {
		source: ImageData;
		cornerPoints: CornerPoints;
		result?: HTMLCanvasElement;
	};

	interface Props {
		onclose: () => void;
		onscan: (image: ImageData, cornerPoints: CornerPoints) => void;
		openCv: typeof OpenCv;
		videoStream: MediaStream;
	}

	let { openCv, onscan, onclose, videoStream }: Props = $props();

	const SCAN_IMAGE_TIME_IN_MS = 100;
	const DISTANCE_THRESHOLD_IN_PX_FOR_AUTO_SCAN = 25;
	const SCAN_WHEN_KEPT_FOR_IN_MS = 3000;
	const MIN_PAUSE_BETWEEN_SCANS_IN_MS = 1000;

	let videoFeed: HTMLVideoElement;
	let highlightedPaper: HTMLCanvasElement;
	let previewCanvas: OffscreenCanvas;
	let cornerPoints = $state<CornerPoints>();
	let counterStartedAt = $state(
		+new Date() + SCAN_WHEN_KEPT_FOR_IN_MS + MIN_PAUSE_BETWEEN_SCANS_IN_MS
	);

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

	function findCornerPointsOfPaper(image: ImageLike): CornerPoints | undefined {
		const img = openCv.imread(image);
		try {
			const contour = findPaperContour(img);
			if (!contour) {
				return;
			}

			const cornerPoints = getCornerPoints(openCv, contour);
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
		onclose();
	}

	function rerunHighlightPaperInVideo() {
		const previewCanvasCtx = previewCanvas.getContext('2d', { willReadFrequently: true })!;
		previewCanvasCtx.drawImage(videoFeed, 0, 0);
		const newCornerPoints = findCornerPointsOfPaper(previewCanvas) ?? cornerPoints;
		cornerPoints ??= newCornerPoints;
		if (!newCornerPoints || !cornerPoints) {
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
			return;
		}
		const ctx = highlightedPaper.getContext('2d');
		if (!ctx) {
			console.log('Could not draw on highlightedPaper canvas');
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
			return;
		}

		const isSimilarDistance =
			distance(cornerPoints.topLeftCorner, newCornerPoints.topLeftCorner) <
				DISTANCE_THRESHOLD_IN_PX_FOR_AUTO_SCAN &&
			distance(cornerPoints.topRightCorner, newCornerPoints.topRightCorner) <
				DISTANCE_THRESHOLD_IN_PX_FOR_AUTO_SCAN &&
			distance(cornerPoints.bottomLeftCorner, newCornerPoints.bottomLeftCorner) <
				DISTANCE_THRESHOLD_IN_PX_FOR_AUTO_SCAN &&
			distance(cornerPoints.bottomRightCorner, newCornerPoints.bottomRightCorner) <
				DISTANCE_THRESHOLD_IN_PX_FOR_AUTO_SCAN;
		if (!isSimilarDistance) {
			counterStartedAt = +new Date();
		}
		cornerPoints = newCornerPoints;
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
		ctx.font = '50px sans-serif';
		ctx.fillStyle = 'lime';
		const countingFor = +new Date() - counterStartedAt;
		if (countingFor >= SCAN_WHEN_KEPT_FOR_IN_MS) {
			ctx.fillText(`Snapped!`, 50, 50);
			onscan(
				previewCanvasCtx.getImageData(0, 0, previewCanvas.width, previewCanvas.height),
				cornerPoints
			);
			counterStartedAt = +new Date() + MIN_PAUSE_BETWEEN_SCANS_IN_MS;
			timerId = setTimeout(rerunHighlightPaperInVideo, MIN_PAUSE_BETWEEN_SCANS_IN_MS);
		} else {
			const secondsToGo = Math.round((SCAN_WHEN_KEPT_FOR_IN_MS - countingFor) / 1000);
			ctx.fillText(`Time until snap: ${secondsToGo}`, 50, 50);
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
		}
	}

	onMount(() => {
		videoFeed.srcObject = videoStream;
		videoFeed.onloadedmetadata = () => {
			videoFeed.play();
			previewCanvas = new OffscreenCanvas(videoFeed.videoWidth, videoFeed.videoHeight);
			highlightedPaper.width = videoFeed.videoWidth;
			highlightedPaper.height = videoFeed.videoHeight;
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
		};

		return () => {
			clearTimeout(timerId);
			videoFeed.pause();
			videoFeed.srcObject = null;
		};
	});
</script>

<section class="scanner">
	<button
		aria-label="Stop scanning"
		class="grid max-h-dvh grid-cols-1 grid-rows-1 place-items-center"
		onclick={(event) => {
			console.log('clicked on button -> stopping');
			const rect = highlightedPaper.getBoundingClientRect();
			const scaleX = highlightedPaper.width / rect.width;
			const scaleY = highlightedPaper.height / rect.height;
			const coords = {
				x: (event.clientX - rect.left) * scaleX,
				y: (event.clientY - rect.top) * scaleY
			};
			if (cornerPoints && isInsidePoints(openCv, coords, cornerPoints)) {
				console.log('got inside the corner points!');
				event.stopPropagation();
				event.preventDefault();
				const previewCanvasCtx = previewCanvas.getContext('2d', { willReadFrequently: true })!;
				onscan(
					previewCanvasCtx.getImageData(0, 0, previewCanvas.width, previewCanvas.height),
					cornerPoints
				);
				counterStartedAt = +new Date() + MIN_PAUSE_BETWEEN_SCANS_IN_MS;
				timerId = setTimeout(rerunHighlightPaperInVideo, MIN_PAUSE_BETWEEN_SCANS_IN_MS);
			} else {
				console.log('NOT got inside the corner points, stopping');
				stopScan();
			}
		}}
	>
		<video bind:this={videoFeed} id="videofeed" class="max-h-full max-w-full [grid-area:1/1/2/2]">
			<track kind="captions" />
		</video>
		<canvas
			bind:this={highlightedPaper}
			id="hlpaper"
			class="max-h-full max-w-full [grid-area:1/1/2/2]"
		></canvas>
	</button>
</section>

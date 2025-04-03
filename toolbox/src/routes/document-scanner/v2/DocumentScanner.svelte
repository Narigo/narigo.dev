<script lang="ts">
	import type {
		CornerPoints,
		ImageLike,
		OpenCv,
		Point2d
	} from '$lib/tools/document-scanner/jscanify';
	import { onMount } from 'svelte';

    type RecordedImage = {
        src: string;
        x: string;
        nice: string;
        nope: string;
    }
	interface Props {
		onscan: (image: RecordedImage) => void;
		openCv: typeof OpenCv;
		videoStream: MediaStream;
	}

	let { openCv, videoStream }: Props = $props();

	const SCAN_IMAGE_TIME_IN_MS = 100;

	let videoFeed: HTMLVideoElement;
	let highlightedPaper: HTMLCanvasElement;
	let previewCanvas: OffscreenCanvas;

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

	function findCornerPointsOfPaper(
		image: ImageLike,
		options: { widthAspect: number; heightAspect: number } = { widthAspect: 1, heightAspect: 1 }
	): CornerPoints | undefined {
		const img = openCv.imread(image);
		try {
			const contour = findPaperContour(img);
			if (!contour) {
				return;
			}

			const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
				getCornerPoints(contour);
			if (!(topLeftCorner && topRightCorner && bottomLeftCorner && bottomRightCorner)) {
				return;
			}

			return {
				topLeftCorner: {
					x: topLeftCorner.x * options.widthAspect,
					y: topLeftCorner.y * options.heightAspect
				},
				topRightCorner: {
					x: topRightCorner.x * options.widthAspect,
					y: topRightCorner.y * options.heightAspect
				},
				bottomRightCorner: {
					x: bottomRightCorner.x * options.widthAspect,
					y: bottomRightCorner.y * options.heightAspect
				},
				bottomLeftCorner: {
					x: bottomLeftCorner.x * options.widthAspect,
					y: bottomLeftCorner.y * options.heightAspect
				}
			};
		} finally {
			img.delete();
		}
	}

	onMount(() => {
		videoFeed.srcObject = videoStream;
		previewCanvas = new OffscreenCanvas(videoFeed.width, videoFeed.height);
		const previewCanvasCtx = previewCanvas.getContext('2d', { willReadFrequently: true })!;
		let timerId: ReturnType<typeof setTimeout> = setTimeout(
			rerunHighlightPaperInVideo,
			SCAN_IMAGE_TIME_IN_MS
		);

		function rerunHighlightPaperInVideo() {
			previewCanvasCtx.drawImage(videoFeed, 0, 0);
			const cornerPoints = findCornerPointsOfPaper(previewCanvas);
			if (cornerPoints) {
				const ctx = highlightedPaper.getContext('2d');
				if (!ctx) {
					console.log('Could not draw on highlightedPaper canvas');
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
			}
			timerId = setTimeout(rerunHighlightPaperInVideo, SCAN_IMAGE_TIME_IN_MS);
		}
		return () => {
			clearTimeout(timerId);
			videoFeed.pause();
			videoFeed.srcObject = null;
		};
	});
</script>

<section>
	<video bind:this={videoFeed}>
		<track kind="captions" />
	</video>
	<canvas bind:this={highlightedPaper}></canvas>
</section>

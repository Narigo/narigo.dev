<script lang="ts">
	import type {
		CornerPoints,
		ImageLike,
		OpenCv,
		Point2d
	} from '$lib/tools/document-scanner/jscanify';

	interface Props {
		openCv: typeof OpenCv;
	}

	let { openCv }: Props = $props();

	let videoFeed: HTMLVideoElement;
	let highlightedPaper: HTMLCanvasElement;

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

	function drawPaperOnCanvas(
		image: OpenCv.Mat,
		canvas: HTMLCanvasElement,
		contour: OpenCv.Mat,
		options: { color: string; thickness: number } = { color: 'orange', thickness: 10 }
	) {
		const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
		openCv.imshow(canvas, image);

		const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
			getCornerPoints(contour);
		if (topLeftCorner && topRightCorner && bottomLeftCorner && bottomRightCorner) {
			ctx.strokeStyle = options.color;
			ctx.lineWidth = options.thickness;
			ctx.beginPath();
			ctx.moveTo(topLeftCorner.x, topLeftCorner.y);
			ctx.lineTo(topRightCorner.x, topRightCorner.y);
			ctx.lineTo(bottomRightCorner.x, bottomRightCorner.y);
			ctx.lineTo(bottomLeftCorner.x, bottomLeftCorner.y);
			ctx.lineTo(topLeftCorner.x, topLeftCorner.y);
			ctx.stroke();
		}

		return canvas;
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
</script>

<section>
	<video bind:this={videoFeed}>
		<track kind="captions" />
	</video>
	<canvas bind:this={highlightedPaper}></canvas>
</section>

/*! jscanify v1.4.0 | (c) ColonelParrot and other contributors | MIT License */

export type CornerPoints = {
	topLeftCorner: Point2d;
	topRightCorner: Point2d;
	bottomRightCorner: Point2d;
	bottomLeftCorner: Point2d;
};
export type Point2d = { x: number; y: number };
export type ImageLike = HTMLImageElement | HTMLCanvasElement | OffscreenCanvas;
export declare namespace OpenCv {
	const BORDER_DEFAULT: any;
	const THRESH_OTSU: any;
	const RETR_CCOMP: any;
	const CHAIN_APPROX_SIMPLE: any;
	const CV_32FC2: any;
	const CV_32SC2: any;
	const INTER_LINEAR: any;
	const BORDER_CONSTANT: any;
	function pointPolygonTest(contour: Mat, point: Point, measureDist: boolean): number;
	function imread(image: ImageLike): Mat;
	function imshow(canvas: HTMLCanvasElement | OffscreenCanvas, image: Mat): void;
	function Canny(img: Mat, imgGray: Mat, a: number, b: number): void;
	function GaussianBlur(
		imgGray: Mat,
		imgBlur: Mat,
		size: Size,
		a: number,
		b: number,
		constant: any
	): void;
	function threshold(imgBlur: Mat, imgThresh: Mat, min: number, max: number, constant: any): void;
	function findContours(
		imgThresh: Mat,
		contours: MatVector,
		hierarchy: Mat,
		...constants: Array<any>
	): void;
	function contourArea(element: Mat): number;
	function matFromArray(
		lengthOfNumbers: number,
		dimensions: number,
		constant: any,
		numbers: Array<number>
	): Mat;
	function getPerspectiveTransform(srcTri: Mat, dstTri: Mat): Mat;
	function warpPerspective(
		img: Mat,
		warpedDst: Mat,
		M: Mat,
		dsize: Size,
		constantA: any,
		constantB: any,
		output: Scalar
	): void;
	function minAreaRect(contour: Mat): Rectangle;
	class Size {
		constructor(a: number, b: number);
	}
	class Rectangle {
		center: Point;
	}
	class Point {
		x: number;
		y: number;
	}
	class Scalar {}
	class Mat {
		constructor();
		constructor(points: Array<[number, number]>);
		data32S: Array<number>;
		delete(): void;
	}
	class MatVector {
		get(n: number): Mat;
		size(): number;
		delete(): void;
	}
}

/**
 * Calculates distance between two points. Each point must have `x` and `y` property
 * @param {*} p1 point 1
 * @param {*} p2 point 2
 * @returns distance between two points
 */
export function distance(p1: Point2d, p2: Point2d) {
	return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

export function extractPaper(
	openCv: typeof OpenCv,
	image: ImageLike,
	cornerPoints: CornerPoints,
	desiredSize: { width: number; height: number }
): HTMLCanvasElement {
	const { width, height } = desiredSize;
	const canvas = document.createElement('canvas');
	const img = openCv.imread(image);

	const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } = cornerPoints;
	const warpedDst = new openCv.Mat();

	const dsize = new openCv.Size(width, height);
	const srcTri = openCv.matFromArray(4, 1, openCv.CV_32FC2, [
		topLeftCorner.x,
		topLeftCorner.y,
		topRightCorner.x,
		topRightCorner.y,
		bottomLeftCorner.x,
		bottomLeftCorner.y,
		bottomRightCorner.x,
		bottomRightCorner.y
	]);

	const dstTri = openCv.matFromArray(4, 1, openCv.CV_32FC2, [
		0,
		0,
		width,
		0,
		0,
		height,
		width,
		height
	]);

	const M = openCv.getPerspectiveTransform(srcTri, dstTri);
	openCv.warpPerspective(
		img,
		warpedDst,
		M,
		dsize,
		openCv.INTER_LINEAR,
		openCv.BORDER_CONSTANT,
		new openCv.Scalar()
	);

	openCv.imshow(canvas, warpedDst);

	img.delete();
	warpedDst.delete();
	return canvas;
}

export function getCornerPoints(openCv: typeof OpenCv, contour: OpenCv.Mat) {
	const rect = openCv.minAreaRect(contour);
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

export function isInsidePoints(
	openCv: typeof OpenCv,
	coords: Point2d,
	cornerPoints: CornerPoints
): boolean {
	const contour: Array<[number, number]> = [
		[cornerPoints.topLeftCorner.x, cornerPoints.topLeftCorner.y],
		[cornerPoints.topRightCorner.x, cornerPoints.topRightCorner.y],
		[cornerPoints.bottomRightCorner.x, cornerPoints.bottomRightCorner.y],
		[cornerPoints.bottomLeftCorner.x, cornerPoints.bottomLeftCorner.y]
	];
	const result =
		openCv.pointPolygonTest(
			openCv.matFromArray(contour.length, 1, openCv.CV_32SC2, contour.flat()),
			coords,
			false
		) >= 0;
	return result;
}

export default class jscanify {
	cv: typeof OpenCv;

	constructor(openCv: typeof OpenCv) {
		this.cv = openCv;
	}

	/**
	 * Finds the contour of the paper within the image
	 * @param {*} img image to process (cv.Mat)
	 * @returns the biggest contour inside the image
	 */
	findPaperContour(img: OpenCv.Mat) {
		const imgGray = new this.cv.Mat();
		this.cv.Canny(img, imgGray, 50, 200);

		const imgBlur = new this.cv.Mat();
		this.cv.GaussianBlur(imgGray, imgBlur, new this.cv.Size(3, 3), 0, 0, this.cv.BORDER_DEFAULT);

		const imgThresh = new this.cv.Mat();
		this.cv.threshold(imgBlur, imgThresh, 0, 255, this.cv.THRESH_OTSU);

		const contours = new this.cv.MatVector();
		const hierarchy = new this.cv.Mat();

		this.cv.findContours(
			imgThresh,
			contours,
			hierarchy,
			this.cv.RETR_CCOMP,
			this.cv.CHAIN_APPROX_SIMPLE
		);

		let maxArea = 0;
		let maxContourIndex = -1;
		for (let i = 0; i < contours.size(); ++i) {
			const contourArea = this.cv.contourArea(contours.get(i));
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

	findCornerPointsOfPaper(
		image: ImageLike,
		options: { widthAspect: number; heightAspect: number } = { widthAspect: 1, heightAspect: 1 }
	): CornerPoints | undefined {
		const img = this.cv.imread(image);
		try {
			const contour = this.findPaperContour(img);
			if (!contour) {
				return;
			}

			const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
				this.getCornerPoints(contour);
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

	drawAndExtract(
		image: ImageLike,
		{
			highlightCanvas,
			color = 'orange',
			thickness = 10,
			extractCanvas
		}: {
			highlightCanvas: HTMLCanvasElement | OffscreenCanvas;
			color?: string;
			thickness?: number;
			extractCanvas: HTMLCanvasElement;
		}
	) {
		const resultWidth = extractCanvas.width;
		const resultHeight = extractCanvas.height;

		const img = this.cv.imread(image);
		this.cv.imshow(highlightCanvas, img);
		try {
			const contour = this.findPaperContour(img);
			if (!contour) {
				return;
			}

			const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
				this.getCornerPoints(contour);
			if (!(topLeftCorner && topRightCorner && bottomLeftCorner && bottomRightCorner)) {
				return;
			}

			if (highlightCanvas) {
				const ctx = highlightCanvas.getContext('2d', { willReadFrequently: true })!;
				ctx.strokeStyle = color;
				ctx.lineWidth = thickness;
				ctx.beginPath();
				ctx.moveTo(topLeftCorner.x, topLeftCorner.y);
				ctx.lineTo(topRightCorner.x, topRightCorner.y);
				ctx.lineTo(bottomRightCorner.x, bottomRightCorner.y);
				ctx.lineTo(bottomLeftCorner.x, bottomLeftCorner.y);
				ctx.lineTo(topLeftCorner.x, topLeftCorner.y);
				ctx.stroke();
			}

			const warpedDst = new this.cv.Mat();
			const dsize = new this.cv.Size(resultWidth, resultHeight);
			const srcTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
				topLeftCorner.x,
				topLeftCorner.y,
				topRightCorner.x,
				topRightCorner.y,
				bottomLeftCorner.x,
				bottomLeftCorner.y,
				bottomRightCorner.x,
				bottomRightCorner.y
			]);

			const dstTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
				0,
				0,
				resultWidth,
				0,
				0,
				resultHeight,
				resultWidth,
				resultHeight
			]);

			const M = this.cv.getPerspectiveTransform(srcTri, dstTri);
			this.cv.warpPerspective(
				img,
				warpedDst,
				M,
				dsize,
				this.cv.INTER_LINEAR,
				this.cv.BORDER_CONSTANT,
				new this.cv.Scalar()
			);
			this.cv.imshow(extractCanvas, warpedDst);
		} finally {
			img.delete();
		}
	}

	drawPaperOnCanvas(
		image: OpenCv.Mat,
		canvas: HTMLCanvasElement,
		contour: OpenCv.Mat,
		options: { color: string; thickness: number } = { color: 'orange', thickness: 10 }
	) {
		const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
		this.cv.imshow(canvas, image);

		const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
			this.getCornerPoints(contour);
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

	/**
	 * Highlights the paper detected inside the image.
	 * @param {*} image image to process
	 * @param {*} options options for highlighting. Accepts `color` and `thickness` parameter
	 * @returns `HTMLCanvasElement` with original image and paper highlighted
	 */
	highlightPaper(
		image: ImageLike,
		options: { color: string; thickness: number } = { color: 'orange', thickness: 10 }
	) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		const img = this.cv.imread(image);

		const maxContour = this.findPaperContour(img);
		this.cv.imshow(canvas, img);
		if (maxContour) {
			const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
				this.getCornerPoints(maxContour);

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
		}

		img.delete();
		return canvas;
	}

	/**
	 * Extracts and undistorts the image detected within the frame.
	 *
	 * Returns `null` if no paper is detected.
	 *
	 * @param {*} image image to process
	 * @param {*} resultWidth desired result paper width
	 * @param {*} resultHeight desired result paper height
	 * @param {*} cornerPoints optional custom corner points, in case automatic corner points are incorrect
	 * @returns `HTMLCanvasElement` containing undistorted image
	 */
	extractPaper(
		image: ImageLike,
		widthAspect: number,
		heightAspect: number,
		resultWidth: number,
		resultHeight: number,
		cornerPoints: ReturnType<typeof this.getCornerPoints>
	) {
		const canvas = document.createElement('canvas');
		const img = this.cv.imread(image);

		console.log('extract paper', {
			widthAspect,
			heightAspect,
			lcpTlx: cornerPoints.topLeftCorner.x,
			lcpTly: cornerPoints.topLeftCorner.y,
			imageHeight: image.height,
			imageWidth: image.width
		});
		const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } = cornerPoints;
		const warpedDst = new this.cv.Mat();

		const dsize = new this.cv.Size(resultWidth, resultHeight);
		const srcTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
			widthAspect * topLeftCorner.x,
			heightAspect * topLeftCorner.y,
			widthAspect * topRightCorner.x,
			heightAspect * topRightCorner.y,
			widthAspect * bottomLeftCorner.x,
			heightAspect * bottomLeftCorner.y,
			widthAspect * bottomRightCorner.x,
			heightAspect * bottomRightCorner.y
		]);

		const dstTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
			0,
			0,
			resultWidth,
			0,
			0,
			resultHeight,
			resultWidth,
			resultHeight
		]);

		const M = this.cv.getPerspectiveTransform(srcTri, dstTri);
		this.cv.warpPerspective(
			img,
			warpedDst,
			M,
			dsize,
			this.cv.INTER_LINEAR,
			this.cv.BORDER_CONSTANT,
			new this.cv.Scalar()
		);

		this.cv.imshow(canvas, warpedDst);

		img.delete();
		warpedDst.delete();
		return canvas;
	}

	/**
	 * Calculates the corner points of a contour.
	 * @param {*} contour contour from {@link findPaperContour}
	 * @returns object with properties `topLeftCorner`, `topRightCorner`, `bottomLeftCorner`, `bottomRightCorner`, each with `x` and `y` property
	 */
	getCornerPoints(contour: NonNullable<ReturnType<typeof this.findPaperContour>>) {
		const rect = this.cv.minAreaRect(contour);
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
}

/*! jscanify v1.4.0 | (c) ColonelParrot and other contributors | MIT License */

type Point2d = { x: number; y: number };
class Mat {
	constructor() {}
}
type ImageLike = Mat;
export type OpenCv = {
	Canny: (img: ImageLike, imgGray: Mat, a: number, b: number) => void;
	Mat: Mat;
};

/**
 * Calculates distance between two points. Each point must have `x` and `y` property
 * @param {*} p1 point 1
 * @param {*} p2 point 2
 * @returns distance between two points
 */
function distance(p1: Point2d, p2: Point2d) {
	return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

export default class jscanify {
	cv: any;

	constructor(openCv: OpenCv) {
		this.cv = openCv;
	}

	/**
	 * Finds the contour of the paper within the image
	 * @param {*} img image to process (cv.Mat)
	 * @returns the biggest contour inside the image
	 */
	findPaperContour(img: ImageLike) {
		const imgGray = new this.cv.Mat();
		this.cv.Canny(img, imgGray, 50, 200);

		const imgBlur = new this.cv.Mat();
		this.cv.GaussianBlur(imgGray, imgBlur, new this.cv.Size(3, 3), 0, 0, this.cv.BORDER_DEFAULT);

		const imgThresh = new this.cv.Mat();
		this.cv.threshold(imgBlur, imgThresh, 0, 255, this.cv.THRESH_OTSU);

		let contours = new this.cv.MatVector();
		let hierarchy = new this.cv.Mat();

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
			let contourArea = this.cv.contourArea(contours.get(i));
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
		resultWidth: number,
		resultHeight: number,
		cornerPoints: ReturnType<typeof this.getCornerPoints>
	) {
		const canvas = document.createElement('canvas');
		const img = this.cv.imread(image);
		const maxContour = cornerPoints ? null : this.findPaperContour(img);

		if (maxContour == null && cornerPoints === undefined) {
			return null;
		}

		const { topLeftCorner, topRightCorner, bottomLeftCorner, bottomRightCorner } =
			cornerPoints || this.getCornerPoints(maxContour);
		let warpedDst = new this.cv.Mat();

		let dsize = new this.cv.Size(resultWidth, resultHeight);
		let srcTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
			topLeftCorner.x,
			topLeftCorner.y,
			topRightCorner.x,
			topRightCorner.y,
			bottomLeftCorner.x,
			bottomLeftCorner.y,
			bottomRightCorner.x,
			bottomRightCorner.y
		]);

		let dstTri = this.cv.matFromArray(4, 1, this.cv.CV_32FC2, [
			0,
			0,
			resultWidth,
			0,
			0,
			resultHeight,
			resultWidth,
			resultHeight
		]);

		let M = this.cv.getPerspectiveTransform(srcTri, dstTri);
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
	getCornerPoints(contour: ReturnType<typeof this.findPaperContour>) {
		let rect = this.cv.minAreaRect(contour);
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

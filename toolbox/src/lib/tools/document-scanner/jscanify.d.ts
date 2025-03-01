declare module 'jscanify' {
	export default function (): JScanify;

	interface JScanify {
		highlightPaper(image: HTMLImageElement): HTMLCanvasElement;
	}
}

<script lang="ts">
	import type { ContourPoints, RecordedImage } from './DocumentScanner.svelte';

	interface Props {
		image: ImageData;
		onselect: (contourPoints: ContourPoints) => void;
	}
	let { image, onselect }: Props = $props();
</script>

<section>Should show image here from the scanner. Allow changing corner points.</section>

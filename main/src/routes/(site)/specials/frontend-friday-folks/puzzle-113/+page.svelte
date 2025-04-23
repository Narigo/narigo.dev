<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:conic-gradient(at -380px,#5776F6 86.3deg,#191919 0 93.7deg,#5776F6 0`;
</script>

<PuzzlePageLayout title="Black Light" puzzleId="113">
	<Puzzle title="Conic Gradient Solution" {solution} />
	<Narigo>
		<p>
			I did this out of order as I was sure this should be doable with a single conic-gradient. I
			finally got it, but it took me a long time to get values that worked.
		</p>
	</Narigo>
</PuzzlePageLayout>

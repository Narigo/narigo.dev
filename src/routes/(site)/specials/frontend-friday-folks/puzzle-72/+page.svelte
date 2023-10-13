<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Sheep">
	<Puzzle title="Puzzle 72 solution" {solution} />
	<Narigo>
		This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees.
	</Narigo>
</PuzzlePageLayout>

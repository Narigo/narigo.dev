<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Happy Tiger">
	<Puzzle title="Puzzle 73 solution" {solution} />
	<Narigo>
		Lots of gradients! 100% again! Finally! Yes! This time, using background positioning and
		background sizes to get the correct result.
	</Narigo>
</PuzzlePageLayout>

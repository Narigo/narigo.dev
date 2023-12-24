<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Notes">
	<Puzzle title="Puzzle 77 solution" {solution} />
	<Narigo></Narigo>
</PuzzlePageLayout>

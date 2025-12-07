<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Corona Virus" puzzleId="47">
	<Puzzle title="Puzzle 47 solution" {solution} />
	<Narigo
		>I think we never did this puzzle in VirtualCoffee. Maybe we forgot or the title put us off at
		the time...</Narigo
	>
</PuzzlePageLayout>

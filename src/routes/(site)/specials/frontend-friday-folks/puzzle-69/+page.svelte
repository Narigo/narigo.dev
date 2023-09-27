<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="PushOwl">
	<Puzzle title="Puzzle 69 solution" {solution} />
	<Narigo>I missed doing this puzzle with VirtualCoffee, so I had to do this on my own.</Narigo>
</PuzzlePageLayout>

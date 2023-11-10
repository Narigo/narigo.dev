<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Evil Cat">
	<Puzzle title="Puzzle 175 solution" {solution} />
	<Narigo>
	</Narigo>
</PuzzlePageLayout>

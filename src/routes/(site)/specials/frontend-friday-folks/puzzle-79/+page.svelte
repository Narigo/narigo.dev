<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Tambourine">
	<Puzzle title="Puzzle 79 solution" {solution} />
	<Narigo>
		Sometimes, repeating divs and moving them around seems to be the most simple solution. There may
		be a background repeat solution for the "jingles" (or "zils" as we learned from ChatGPT).
	</Narigo>
</PuzzlePageLayout>

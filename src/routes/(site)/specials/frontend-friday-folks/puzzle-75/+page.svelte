<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Hippo">
	<Puzzle title="Puzzle 75 solution" {solution} />
	<Narigo>
		I've tried using <Code>-webkit-box-reflect</Code>, but it doesn't seem to work out with absolute
		positioning...? Anyways, I think the main idea here is using border radius in pixels and
		percentages to get to 100%.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Space Invaders" puzzleId="124">
	<Puzzle title="Space Invaders solution" {solution} />
	<Narigo>
		<p>
			Shaishav joined late and rescued the clip-path solution! Using <Code>arc</Code> works, if you know
			how to manipulate its values. Obviously, Shaishav had the right intuition and got us to the right
			values that it counted as 100%. Thanks!
		</p>
	</Narigo>
</PuzzlePageLayout>

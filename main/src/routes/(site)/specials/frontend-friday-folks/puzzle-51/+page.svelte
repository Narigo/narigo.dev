<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Wear a Mask" puzzleId="51">
	<Puzzle title="Puzzle 51 solution" {solution} />
	<Narigo>
		<p>
			I've done this puzzle today after not doing this for a while. We didn't do 51 and 52 in the
			regular Frontend Friday Folks sessions and I'm not really sure why. I missed one of the
			sessions and in there it was decided to skip those two.
		</p>
		<p>
			Anyways, I've used a radial gradient instead of a new element, but usually an extra element
			for that can be done in less characters.
		</p>
	</Narigo>
</PuzzlePageLayout>

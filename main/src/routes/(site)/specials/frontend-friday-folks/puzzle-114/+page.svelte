<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      conic-gradient(#172D2C 250deg,#E9AF53 0 290deg,#172D2C 0) 200px -65px / 360px no-repeat,
      linear-gradient(19.9deg,#172D2C 93px,#E9AF53 0 215px,#172D2C 0) 20px 13.5px / 180px no-repeat,
      #172D2C
  }
</style>`;
</script>

<PuzzlePageLayout title="Negative Box" puzzleId="114">
	<Puzzle title="Gradient mix" {solution} />
	<Narigo>
		<p>
			Two gradients next to each other. Now that I look at this again, I think of a second solution
			that could be a conic gradient for all the colors and two linear gradients that remove the
			rest...!
		</p>
	</Narigo>
</PuzzlePageLayout>

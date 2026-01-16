<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
	const gradientSolution = `<style>&{background:
linear-gradient(45deg,#3210 83.5px,#060F55 0 113.5px,#3210 0) 270px 254px / 140px 140px no-repeat,
linear-gradient(45deg,#3210 83.5px,#060F55 0 113.5px,#3210 0) 355px 170px / 140px 140px no-repeat,
linear-gradient(45deg,#3210 74px,#060F55 0 124px,#3210 0) 100% 100% / 140px 140px no-repeat,
radial-gradient(circle at 280px 265px,#060F55 15px, #3210 0),
radial-gradient(circle at 365px 180px,#060F55 15px, #3210 0),
radial-gradient(circle at 276px 176px,#060F55 25px, #3210 0),
#6592CF`;
</script>

<PuzzlePageLayout title="Splash" puzzleId="147">
	<Puzzle title="Gradient solution" solution={gradientSolution} />
	<Narigo>After solving it with p tags, we solved it with gradients.</Narigo>
</PuzzlePageLayout>

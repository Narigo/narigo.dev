<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:
  conic-gradient(#3210 135deg, #1038BF 0 225deg, #3210 0) 0 -24px / 100% 324px,
  radial-gradient(1q,#4F77FF 40px, #3210 0)0 -20px / 100% 100% no-repeat,
  radial-gradient(1q,#FFF 40px, #4F77FF 0)0 -60px`;
</script>

<PuzzlePageLayout title="Eclipse" puzzleId="140">
	<Puzzle title="Eclipse solution" {solution} />
	<Narigo>
		<p>
			I began with the mountain and when I removed the part of the white moon, I figured out that
			changing the layers (and transparency values) makes more sense here. So now, it's a mountain
			with transparency on top of a blue, transparent "moon", which is the cut-out for the actual
			white to blue moon.
		</p>
	</Narigo>
</PuzzlePageLayout>

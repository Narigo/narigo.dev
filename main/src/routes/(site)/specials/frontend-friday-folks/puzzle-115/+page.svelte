<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  div:after,div:before{
    position:absolute;
    content:'';
    inset:50% -50% -50% 20px;
    border-radius:100px;
    background:radial-gradient(1q,#3210 50px,var(--c,#C36271) 0) var(--x,-110px) -150px;
  }
  div:before{
    inset:-50% 20px 50% -50%;
    --c:#F2E09F;
    --x:110px;
  }
  div {
    position:absolute;
    inset: 0;
    background: linear-gradient(#C36271 150.5px, #F2E09F 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Droplet" puzzleId="109">
	<Puzzle title="Pseudo elements" {solution} />
	<Narigo>
		<p>I couldn't make it this Friday, but this puzzle is what was scheduled next.</p>
		<p>
			I thought I'll take two pseudo elements, move them around and at the same time use the main
			element to do the circle in the middle. The pseudo elements need to keep that space clean
			(transparent) and fill the rest with their color. This way, the main element can draw the
			sides and the circle colors, while the pseudo elements could use transparency and border
			radius to draw the inner circle and the curves.
		</p>
	</Narigo>
</PuzzlePageLayout>

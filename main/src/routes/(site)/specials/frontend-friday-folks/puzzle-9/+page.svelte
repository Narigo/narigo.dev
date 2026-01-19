<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="bg-rect"></div>
<div class="border-rect"></div>
<div class="inner-rect"></div>
<div class="circle"></div>
<style>
  body {
    background: #222730;
    margin: 0;
    padding: 0;
  }
  .bg-rect {
    background: #4CAAB3;
    position: absolute;
    top: 25%;
    bottom: 25%;
    left: 0;
    right: 0;
  }
  .border-rect {
    position: absolute;
    background: #222730;
    transform: rotate(45deg);
    top: calc(50% - calc(50vh + 100px) / 2);
    left: calc(50% - calc(50vh + 100px) / 2);
    height: calc(50vh + 100px);
    width: calc(50vh + 100px);
  }
  .inner-rect {
    position: absolute;
    background: #4CAAB3;
    transform: rotate(45deg);
    top: 25%;
    left: calc(50% - 50vh / 2);
    height: 50vh;
    width: 50vh;
  }
  .circle {
    position: absolute;
    background: #393E46;
    border-radius: 50%;
    transform: rotate(45deg);
    top: calc(50% - 50px / 2);
    left: calc(50% - 50px / 2);
    height: 50px;
    width: 50px;
  }
</style>`;

	const oneElementSolution = `<p><style>&{background:linear-gradient(#222730 75px,#4CAAB3 0 225px,#222730 0)}p{position:fixed;inset:9px 75px;border:solid+50px#222730;rotate:45deg;background:radial-gradient(1q,#393E46 25px,#4CAAB3`;
</script>

<PuzzlePageLayout title="Tesseract" puzzleId="9">
	<Puzzle title="Puzzle 9 solution" {solution} />
	<Narigo>
		The solution I found in CSSBattle.dev shows a very long thing. I think I should do this again
		with just one element and a background. Let's see how this works out!
	</Narigo>
	<Puzzle title="Puzzle 9 solution with one element" solution={oneElementSolution} />
	<Narigo>
		Okay, I had to try to come up with another one for this. A lot smaller and using a gradient for
		the circle. This looks way better to me, even though I code golfed a bit obviously and wouldn't
		like to use this in production, with the body background and the inset positioning...
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="bottle">
  <div class="neck"></div>
  <div class="upper"></div>
  <div class="container"></div>
</div>
<div class="push"></div>
<div class="tip"></div>
<div class="dropa"></div>
<div class="dropb"></div>
<style>
  * {
    box-sizing: border-box;
  }
  body {
    background: #1A4341;
    margin: 0;
  }
  .bottle {
    position: absolute;
    display: grid;
    justify-items: center;
    inset: 70px 150px;
  }
  .tip {
    background: #F3AC3C;
    border-radius: 0 0 10px 10px;
    position: absolute;
    inset: 70px 100px 210px 280px;
  }
  .dropa,.dropb {
    background: #998235;
    border-radius: 10px;
    position: absolute;
    inset: 100px 100px 180px 280px;
  }
  .dropb {
    inset: 130px 100px 150px 280px;
  }
  .push {
    background: #F3AC3C;
    border-radius: 10px 10px 0;
    position: absolute;
    inset: 50px 150px;
    width: 150px;
    height: 20px;
  }
  .bottle > * {
    background: #F3AC3C;
  }
  .neck {
    height: 20px;
    width: 20px;
  }
  .upper {
    border-radius: 10px 10px 0 0;
    height: 20px;
    width: 50px;
  }
  .container {
    background: radial-gradient(circle at 25px 55px, #998235 25px, transparent 0),
      radial-gradient(circle at 75px 55px, #F3AC3C 25px, transparent 0),
      linear-gradient(#F3AC3C 55px, #998235 0);
    border-radius: 20px;
    height: 140px;
    width: 100px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Use Hand Sanitizer" puzzleId="50">
	<Puzzle title="Puzzle 50 solution" {solution} />
	<Narigo>
		Today we didn't really manage to create very short solutions for this. There is probably a
		better way how to solve this, but it seems like there should be a way to make this a lot
		shorter. Maybe I'll get back to it - or someone else has shared a better solution on <a
			href="https://github.com/orgs/Virtual-Coffee/discussions/891"
			rel="external">the VirtualCoffee.io discussion thread for CSS Battle #50</a
		>.
	</Narigo>
</PuzzlePageLayout>

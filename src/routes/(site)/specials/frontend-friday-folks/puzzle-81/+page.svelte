<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div a></div>
<div b></div>
<div></div>
<div></div>
<style>
  body {
    display: grid;
    place-items:center;
    background:#191919;
    grid-template-columns: repeat(4, 1fr);
    padding: 28px;
  }
  div {
    position:relative;
    margin-top:23;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing:border-box;
    border:20px solid #8F8F8F;
  }
  [a] {
    border-color:#714B67;
  }
  [b]::before {
    position: absolute;
    top: -40;
    right: -20;
    content:'';
    height:70px;
    width:20px;
    border-radius:20px;
    background:#8F8F8F;
  }
</style>`;
</script>

<PuzzlePageLayout title="Odoo">
	<Puzzle title="Odoo solution 1" solution={solution.trim()} />
	<Narigo>
		I have missed this one and I had to solve this on my own. I've tried doing it the way we do it
		during the sessions: First, tell what you see - I saw four items, so I've started with four
		divs. I've added attributes to allow changing the variations: One for the color change, another
		one to add the line up in the 'd'.
	</Narigo>
</PuzzlePageLayout>

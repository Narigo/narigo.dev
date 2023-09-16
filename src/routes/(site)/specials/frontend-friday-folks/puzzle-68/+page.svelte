<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    position:relative;
    width: 120px;
    height: 120px;
    background: #E08027;
    border-radius: 50% 50% 10px 10px;
  }
  body::before {
    content:'';
    position:absolute;
    height:170px;
    width:50px;
    background: linear-gradient(#F2AD43 50%, #824B20 0);
    border-radius: 50px;
    top: 65px;
    left: 175px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Bell">
	<Puzzle title="Puzzle 68 solution" {solution} />
	<Narigo>
		That was fast and fun to work on. I learned that I can use body::before to get rid of an extra
		z-index if I'd used a div::before...!
	</Narigo>
</PuzzlePageLayout>

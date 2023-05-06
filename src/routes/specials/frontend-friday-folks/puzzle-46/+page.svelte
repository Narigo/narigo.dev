<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="root">
<div class="a"></div>  
<div class="b"></div>  
</div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #293462;
  }
  .root {
    background: #FFF1C1;
    display: grid;
    border-radius: 50%;
    overflow: hidden;
    height: 200px;
    width: 200px;
    rotate: 225deg;
  }
  .a,.b {
    background: #FE5F55;
    height: 30px;
    width: 130px;
  }
  .b {
    height: 140px;
    margin-left: -30px;
    margin-top: -55px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Mountains">
	<Puzzle title="Puzzle 46 solution" {solution} />
	<Narigo
		>Pretty much the same idea like Sadie: Hide overflows, nest the divs. One of the divs is moved
		away from the other. By rotating the div (and therefore its children), the mountains appear.</Narigo
	>
</PuzzlePageLayout>

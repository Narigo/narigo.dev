<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div id=r>
  <div class="j a"></div>
  <div class="j b"></div>
  <div class="j c"></div>
  <div class="j d"></div>
  <div class="j e"></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #6592CF;
  }
  div {
    border-radius: 50%;
    box-sizing: border-box;
  }
  #r {
    position: relative;
    margin-top: 20px;
    width: 170px;
    height: 170px;
    background:
      radial-gradient(circle at 50% 185px,#6592CF 50px, #243D83 0 60px, #0000 0),
      radial-gradient(#0000 75px, #243D83 0 85px, #0000 0)
    ;
  }
  .j {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 10px solid #243D83;
    background: radial-gradient(#243D83 5px, #6592CF 0)
  }
  .a {
    left: -10px;
    top: 90px;
  }
  .b {
    left: -10px;
    top: 20px;
  }
  .c {
    left: 60px;
    top: -20px;
  }
  .d {
    right: -10px;
    top: 20px;
  }
  .e {
    right: -10px;
    top: 90px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Tambourine">
	<Puzzle title="Puzzle 79 solution" {solution} />
	<Narigo>
		Sometimes, repeating divs and moving them around seems to be the most simple solution. There may
		be a background repeat solution for the "jingles" (or "zils" as we learned from ChatGPT).
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="grid">
  <div class="ship"></div>
  <div class="ship"></div>
  <div class="ship"></div>
  <div class="ship"></div>
  <div class="ship y"></div>
  <div class=""></div>
  <div class="ship y"></div>
  <div class="ship y"></div>
</div>
<style>
  body {
    background:
      conic-gradient(#2CE1EA) 50% 210px / 10px 10px no-repeat,
      conic-gradient(#2CE1EA) 50% 240px / 10px 10px no-repeat,
      conic-gradient(#2CE1EA) 50% 270px / 10px 15px no-repeat,
      conic-gradient(#0000 135deg,#2CE1EA 0 225deg, #0000 0) 169.5px 249px / 60px 60px no-repeat,
      #071945;
  }
  .ship {
    width: 70px;
    height: 20px;
    background: #dd6b4d;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 70px);
    gap: 30px 20px;
    position: absolute;
    top: 40;
    left: 30;
  }
  .ship {
    --c: #B069F7;
    background: conic-gradient(var(--c) 90deg,transparent 0 180deg,var(--c) 0 270deg,transparent 0) -40px 50% / 100px 100%;
  }
  .y {
    --c: #F8DA37;
  }
</style>`;
</script>

<PuzzlePageLayout title="Space Invaders" puzzleId="124">
	<Puzzle title="Space Invaders solution" {solution} />
	<Narigo>
		<p>
			Hannah joined us for the first time! While she used <Code>clip-path</Code> to shape the invaders,
			I've been using a <Code>conic-gradient</Code> and had to move it around quite a bit to finally
			get to 100%.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #E3516E;
  }
  div {
    width: 200px;
    height: 200px;
    background:
      radial-gradient(circle at 60px 100px, #E3516E 10px, #0000 0) 0 0 / 80px 200px,
      radial-gradient(circle at 20px 60px, #FADE8B 10px, #0000 0) 0 0 / 80px 80px,
      radial-gradient(circle at 60px 20px, #FADE8B 10px, #0000 0) 0 0 / 80px 80px,
      conic-gradient(#E3516E 25%, #FADE8B 0 50%, #E3516E 0 75%, #FADE8B 0) 0 0 / 80px 80px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Checkerboard" puzzleId="153">
	<Puzzle title="Puzzle 153 solution" {solution} />
	<Narigo>
		During the JSCraftCamp 2024, we did two sessions of CSS Battles. This time, we wanted to do the
		solution with repeating gradients. It was fun to see how the checkerboard jumped from a 2x2 (the
		conic-gradient) to the whole board.
	</Narigo>
</PuzzlePageLayout>

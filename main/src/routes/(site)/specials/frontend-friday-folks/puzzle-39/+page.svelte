<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="b"></div>
<div class="s"></div>
<style>
  body {
    background: #1A4341;
    display: grid;
    place-items: center;
  }
  div {
    background: linear-gradient(transparent 75px, #F3AC3C 0 95px, transparent 0 115px, #F3AC3C 0 135px, transparent 0 155px, #F3AC3C 0 175px, transparent 0);
    border-radius: 50%;
    position: absolute;
    width: 250px;
    height: 250px;
  }
  .s {
    background: repeating-linear-gradient(#998235 0 30px, transparent 0 calc(100% - 30px));
    width: 200px;
    height: 200px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Sunset" puzzleId="39">
	<Puzzle title="Puzzle 39 solution" {solution} />
	<Narigo>The repeating-linear-gradient is one character less than adding the color again.</Narigo>
</PuzzlePageLayout>

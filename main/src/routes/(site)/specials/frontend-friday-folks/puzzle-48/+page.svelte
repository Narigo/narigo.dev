<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div><dt></dt></div>
<style>
  body {
    background: #293462
  }
  div {
    background: #FE5F55;
    border: 30px solid #FE5F55;
    border-radius: 20px;
    box-shadow: 0 20px #A64942;
    width: 140px;
    inset: 90px 0 110px;
    margin: auto;
    position: absolute;
  }
  dt {
    background: #A64942;
    border-radius: 40px;
    height: 40px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Wash your hands" puzzleId="48">
	<Puzzle title="Puzzle 48 solution" {solution} />
	<Narigo
		>Dan hosted it today. I don't think there was a solution that can get rid of the inner element
		in order to get the inner "border" round from the outer element.</Narigo
	>
</PuzzlePageLayout>

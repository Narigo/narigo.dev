<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div class="b"></div>
<style>
  body {
    background: #293462;
    margin: 0;
  }
  div {
    position: absolute;
    width: 300px;
    height: 200px;
    background:
      linear-gradient(90deg, #FFF1C1 200px, transparent 0),
      linear-gradient(#FE5F55 150px, #A64942 0)
    ;
  }
  .b {
    transform: translate(-50px, 50px) scaleX(-1) rotate(90deg);
  }
</style>`;

	const solutionNoElement = `<style>
  body {
    background:
      linear-gradient(#FFF1C1, #FFF1C1) no-repeat,
      linear-gradient(90deg, #FE5F55 150px, #A64942 0 50%, transparent 0 300px, #293462 0),
      linear-gradient(#FE5F55 150px, #A64942 0 200px, transparent 0),
      #293462
    ;
    background-size: 50% 50vw, 100%, 100%;
  }
</style>
`;
</script>

<PuzzlePageLayout>
	<Puzzle title="Puzzle 38 solution" {solution} />
	<Narigo>
		Whenever doing a <code>transform</code>, remember that the order matters...!
	</Narigo>
	<Puzzle title="Puzzle 38 solution" solution={solutionNoElement} />
	<Narigo>Ok, one more solution with no elements set up.</Narigo>
</PuzzlePageLayout>

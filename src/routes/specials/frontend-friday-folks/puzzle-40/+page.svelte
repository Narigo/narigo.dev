<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background: #6592CF;
    display: grid;
    place-items: center;
  }
  div {
    width: 200px;
    height: 200px;
  }
  div::after,div::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 100px;
  }
  div::before {
    border: 50px solid #243D83;
    border-radius: 0 100px 100px 100px;
  }
  div::after {
    background: linear-gradient(to right, #243D83 50px, #6592CF 0 100px, #243D83 50px);
  }
</style>
`;
</script>

<PuzzlePageLayout title="Letter B">
	<Puzzle title="Puzzle 40 solution" {solution} />
	<Narigo>Something with linear-gradients again!</Narigo>
</PuzzlePageLayout>

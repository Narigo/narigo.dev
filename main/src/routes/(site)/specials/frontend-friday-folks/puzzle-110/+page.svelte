<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div><div><div><div><div><div><div>
<style>
  body {
    background:#D25B70;
    transform: translate(131px, 132px) rotate(-30deg);
  }
  div {
    rotate: 30deg;
    transform-origin: 120px 5px;
    width: 100px;
    height: 10px;
    background: #F2E09F;
    border-radius: 9px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Sunrays" puzzleId="110">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>Put the rotation point (transform-origin) in the middle and rotate the divs around it!</p>
	</Narigo>
</PuzzlePageLayout>

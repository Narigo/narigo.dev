<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background: #007065;
    --c: #00A79D;
  }
  div {
    inset: 25px 75px;
  }
  div::after {
    inset: -225px -125px;
    --c: #FFEECF;
  }
  div::before {
    inset: -175px -125px;
    --c: #F5C181;
  }
  div,div:after,div:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0;
    border: 125px solid transparent;
    border-bottom: 100px solid var(--c);
  }
</style>
`;

	const saturdaySolution = `<div c></div>
<div b></div>
<div a></div>
<style>
  body {background:#007065}
  div {
    position: fixed;
    left: 75;
    width: 250;
    height:100;
    background: conic-gradient(at 50% 0, #0000 128.66deg, var(--c) 0 231.34deg, #0000 0);
  }
  [a] {
    --c:#FFEECF;
    top: 50;
  }
  [b] {
    --c: #F5C181;
    top: 100;
  }
  [c] {
    --c:#00A79D;
    top: 150;
  }
</style>
`;

	const saturdaySolution2 = `<c><b><a><style>*{background:#007065}a,b,c{position:fixed;left:75;width:250;height:100;background:conic-gradient(at 50%0,#0000 128.66deg,var(--c)0 231.34deg,#0000 0)}a{--c:#FFEECF;top:50}b{--c:#F5C181;top:100}c{--c:#00A79D;top:150`;
</script>

<PuzzlePageLayout title="Christmas Tree" puzzleId="34">
	<Puzzle title="Puzzle 34 solution" {solution} />
	<Narigo
		>Using pseudo elements here to check the stacking seemed to be a good way to solve this.</Narigo
	>
	<Puzzle title="Puzzle 34 solution" solution={saturdaySolution} />
	<Narigo>Saturday CSS battle made me redo this with a gradient!</Narigo>
	<Puzzle title="Puzzle 34 solution" solution={saturdaySolution2} />
	<Narigo>...and make it very small!</Narigo>
</PuzzlePageLayout>

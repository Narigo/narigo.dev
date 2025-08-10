<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div></div>
<style>
  body {
    margin: 130 0 0 30;
    background: conic-gradient(at 50% 92px,#475862 45deg,#BAC7CE 45deg 315deg, #475862 0);
  }
  div+div {
    transform: translate(220px,-120px) scaleX(-1) rotate(-15deg);
  }
  div {
    width: 120px;
    height: 120px;
    background:
    radial-gradient(#4E2B24 15px,#000 0 20px,transparent 0 50px,#000 0),
    radial-gradient(circle at 56px 74px, #0000 50px,#5A6042 0),
    #868A64
    ;
    transform: rotate(-15deg);
    border-radius: 0 50%;
  }
</style>`;
</script>

<PuzzlePageLayout title="Ryuk" puzzleId="105">
	<Puzzle title="100% Solution" {solution} />
	<Narigo>
		<p>
			This was a nice solve with gradients. One div for each eye, with one of them transformed and
			the background as a single <Code>conic-gradient</Code>.
		</p>
	</Narigo>
</PuzzlePageLayout>

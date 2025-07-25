<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<p><p><p><p><p r><p>
<p><p><p><p r><p r><p>
<p y><p y><p><p r><p><p>
<p y><p y><p r><p><p p><p>
<p r><p r><p r><p t><p p><p p>
<p y><p t><p t><p t><p p><p t>
<style>
  body>* {
    margin:0;
    background: var(--c,#173889);
  }
  [r]{--c:#EE4F63}
  [p]{--c:#B069F7}
  [y]{--c:#F8DA37}
  [t]{--c:#2CE1EA}
  body{margin:0 50;display:grid;grid-template-columns:repeat(6, 1fr);gap:6px;background:#173889}
</style>`;
</script>

<PuzzlePageLayout title="Tetris" puzzleId="122">
	<Puzzle title="Tetris as Grid" {solution} />
	<Narigo>
		<p>
			This is a straightforward solution to the puzzle. By using one element for each of the grids,
			it's only a matter of coloring their background based on where they are on the grid.
		</p>
	</Narigo>
</PuzzlePageLayout>

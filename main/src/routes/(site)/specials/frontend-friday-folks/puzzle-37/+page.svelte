<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div><div><div></div></div></div>
<style>
  body,div {
    background: #6592CF;
    display: grid;
    place-items: center;
    rotate: -15deg;
  }
  div {
    background: #243D83;
    height: 250px;
    width: 250px;
    rotate: 15deg;
  }
  div > div {
    background: #6592CF;
    height: 150px;
    width: 150px;
  }
  div > div > div {
    background: #243D83;
    height: 75px;
    width: 75px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Tunnel" puzzleId="37">
	<Puzzle title="Puzzle 37 solution" {solution} />
	<Narigo>
		Ok, I initially thought that <Code>::before</Code> and <Code>::after</Code> could be used for nesting.
		But that's not really the case, so the rotation after rotating is not possible easily.
	</Narigo>
</PuzzlePageLayout>

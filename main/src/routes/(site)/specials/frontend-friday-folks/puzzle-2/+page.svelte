<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<p><p><p><p><style>body{background:#62374e;margin:34px 50px;display:grid;grid-template-columns:50px 50px;gap:68px 200px}p{background:#fdc57b}`;
</script>

<PuzzlePageLayout title="Carrom">
	<Puzzle title="Grid solution" {solution} />
	<Narigo>
		This seems to be my highscore right now. Using margins, gaps and a grid seemed to be an easy way
		to get this done.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const minifiedSolution = `<div><div><div><style>body{background:#F3AC3C;transform:translate(-38q,-116q)rotate(-135deg)}div{background:#254241;width:80;height:80;border-radius:50%50%0;transform:rotate(180deg);transform-origin:95q 95q;div>div{transform:translate(7q,-7q)rotate(90deg`;
</script>

<PuzzlePageLayout title="Chevron" puzzleId="111">
	<Puzzle title="Minified solution" solution={minifiedSolution} />
	<Narigo>
		<p>
			As divs are closing themselves at the end, they nest the other elements which was the trick,
			if I remember correctly.
		</p>
	</Narigo>
</PuzzlePageLayout>

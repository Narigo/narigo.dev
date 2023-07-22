<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Evil Triangles">
	<Puzzle title="Puzzle 60 solution" {solution} />
	<Narigo>
		Satoshi had the great idea to add a background and draw black zig-zag lines on top. I've done
		that with <code>grid</code> today and it felt quite nice 😅
	</Narigo>
</PuzzlePageLayout>

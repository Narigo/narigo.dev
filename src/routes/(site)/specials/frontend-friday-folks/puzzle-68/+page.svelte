<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Bell">
	<Puzzle title="Puzzle 68 solution" {solution} />
	<Narigo>
		That was fast and fun to work on. I learned that I can use body::before to get rid of an extra
		z-index if I'd used a div::before...!
	</Narigo>
</PuzzlePageLayout>

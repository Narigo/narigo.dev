<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="?">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			I couldn't make it this Friday, due to me being at a Hackathon. I'll try doing it by myself
			this time then and check their solutions later!
		</p>
	</Narigo>
</PuzzlePageLayout>

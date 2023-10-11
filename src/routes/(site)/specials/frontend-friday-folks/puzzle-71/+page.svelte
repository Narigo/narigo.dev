<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Elephant">
	<Puzzle title="Puzzle 71 solution" {solution} />
	<Narigo>
		I couldn't make it this week. Thanks to David, it still happened and a <a
			href="https://github.com/orgs/Virtual-Coffee/discussions/1043"
			rel="external">solution for this puzzle</a
		> has been posted.
	</Narigo>
</PuzzlePageLayout>

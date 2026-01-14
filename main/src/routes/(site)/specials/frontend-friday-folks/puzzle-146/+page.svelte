<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<body bgcolor=998235 style=margin:-9%+102px;rotate:45deg;box-shadow:26q+0#FCBE5C,52q+0#0B2429,79q+0#998235,105q+0#FCBE5C,132q+0#0B2429>`;
</script>

<PuzzlePageLayout title="Streaks" puzzleId="146" {solution}>
	<Narigo>
		The box shadow solution was the one with the least amount of characters. I couldn't get the
		gradient solution to use less.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*>*{background:linear-gradient(#b5e0ba,#b5e0ba)0 0/50%200px no-repeat,#5d3a3a`;
</script>

<PuzzlePageLayout title="Simply Square" {solution}>
	<Narigo
		>We haven't done this puzzle in the Frontend Friday folks, but I kind of like how it could be
		done...</Narigo
	>
</PuzzlePageLayout>

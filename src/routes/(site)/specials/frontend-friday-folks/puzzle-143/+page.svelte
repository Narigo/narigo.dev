<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*>*{background:radial-gradient(circle,#D86F45 106q,#F5D6B4 0)75vw -50px`;
</script>

<PuzzlePageLayout title="Simply Circle" {solution}>
	<Narigo>
		Due to time zone change, there was a puzzle selected out of order. Looks like an easy one, but
		pretty hard to get to little amount of characters!
	</Narigo>
</PuzzlePageLayout>

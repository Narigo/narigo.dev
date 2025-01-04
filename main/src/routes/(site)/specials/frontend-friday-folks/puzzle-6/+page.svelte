<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const gradient = `<style>*>*{background:conic-gradient(#FADE8B 25%,#e3516e 0 50%,#F7F3D7 0 75%,#51B5A9 0);margin:-150-100;border:50vw solid #e3516e;border-radius:50%`;
	const nested = `<style>*{background:#E3516E;*{background:conic-gradient(#FADE8B 25%,#0000 0 50%,#F7F3D7 0 75%,#51B5A9 0);clip-path:circle(25vw`;
</script>

<PuzzlePageLayout title="Missing Slice">
	<Puzzle title="Gradient solution" solution={gradient} />
	<Narigo>First solution is regular gradients. Didn't see a good way to make this smaller.</Narigo>
	<Puzzle title="Nested solution" solution={nested} />
	<Narigo>
		Using CSS nesting allowed to have 2 chars less than the previous solution that Dan provided.
		Still remarkable how using background twice is necessary but makes it smaller than the first
		solution!
	</Narigo>
</PuzzlePageLayout>

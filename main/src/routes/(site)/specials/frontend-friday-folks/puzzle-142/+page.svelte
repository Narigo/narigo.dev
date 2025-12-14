<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*{background:linear-gradient(90deg,#1038BF 60px,#3210 0 80px,#fff 0 100px,#3210 0 120px,#1038BF 0 180px,#3210 0 200px,#fff 0 220px,#3210 0 240px,#1038BF 0 300px,#3210 0)50px /100% 200px no-repeat,#4F77FF`;
</script>

<PuzzlePageLayout title="Curtains" puzzleId="142">
	<Puzzle title="Curtains solution" {solution} />
	<Narigo>
		<p>
			I couldn't make it to the VC round this time, but I've done it later. It just screamed
			linear-gradient to me.
		</p>
	</Narigo>
</PuzzlePageLayout>

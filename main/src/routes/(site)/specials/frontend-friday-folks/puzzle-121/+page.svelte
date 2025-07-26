<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{--c:radial-gradient(1q,#69D10A 20px,#3210 0);background:var(--c)130px,var(--c)130px 20px,var(--c)-160px -50px,var(--c)-140px -50px,var(--c)-120px -50px,var(--c)-140px -70px,linear-gradient(#441A0A)50px 110px/20px 70px no-repeat,linear-gradient(#1E92FF 180px,#69D10A 0 220px,#6F6100 0`;
</script>

<PuzzlePageLayout title="Duck Hunt" puzzleId="121">
	<Puzzle title="Duck Hunt" {solution} />
	<Narigo>
		<p>
			A very code straight forward solution just with gradients but code golfed into hard to read
			lines.
		</p>
	</Narigo>
</PuzzlePageLayout>

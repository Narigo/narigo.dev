<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:
radial-gradient(1q,#0088CA 11px,#3210 0),
linear-gradient(-45deg,#3210 87px,#FFF 0 95px,#0088CA 0 115px,#fff 0 123px,#3210 0) 200px -68px / 120px 300px no-repeat,
linear-gradient(45deg,#3210 87px,#FFF 0 95px,#0088CA 0 115px,#fff 0 123px,#3210 0) 120px -28px / 80px 300px no-repeat,
linear-gradient(65deg,#3210 90px,#2E2926 0 130px,#3210 0) 165px 60px / 400px 180px no-repeat,
linear-gradient(-65deg,#3210 90px,#2E2926 0 130px,#3210 0) -165px 60px / 400px 180px no-repeat,
#fff`;
</script>

<PuzzlePageLayout title="Arineo" puzzleId="117">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>I always like the gradient only solutions!</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q at 170px 50%, #D86F45 10px,#3210 0),
      radial-gradient(1q at 90px 50%, #D86F45 10px,#3210 0),
      radial-gradient(1q at 180px 0,#F5D6B4 40px,#D86F45 0 60px,#F5D6B4 0 80px,#D86F45 0 100px,#F5D6B4 0) 0 100% / 100% 50% no-repeat,
      radial-gradient(1q at 50% 100%,#F5D6B4 20px,#D86F45 0 40px,#F5D6B4 0 60px,#D86F45 0 80px,#F5D6B4 0) 0 0 / 100% 50%`;
</script>

<PuzzlePageLayout title="Spiral" puzzleId="133">
	<Puzzle title="Spiral solution" {solution} />
	<Narigo>
		<p>
			It looked harder than it was - basically, there are circles cut in half and moved a bit to a
			side.
		</p>
	</Narigo>
</PuzzlePageLayout>

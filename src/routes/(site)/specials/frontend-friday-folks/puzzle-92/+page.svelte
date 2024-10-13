<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q, #6592CF 16px,#0000 0)-26px -54px/226px 51px,
      radial-gradient(1q, #243D83 100px,#0000 0)-139px/226px,
      linear-gradient(#6592CF 125px,#243D83 0 175px,#6592CF 0);`;
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

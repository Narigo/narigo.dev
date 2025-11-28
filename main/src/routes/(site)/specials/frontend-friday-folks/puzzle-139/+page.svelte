<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:
  linear-gradient(#E38F66 90px,#3210 0),
  conic-gradient(#E38F66 165deg,#FFFBDA 0 195deg, #E38F66 0)0 -265px / 100% 475px no-repeat,
  linear-gradient(90deg,#E38F66 195px,#62306D 0 205px,#E38F66 0)`;
</script>

<PuzzlePageLayout title="Lamp" puzzleId="139">
	<Puzzle title="Lamp solution" {solution} />
	<Narigo>
		<p>
			Finally a good solution with gradients again! 😅 Making gradients not fill out the whole
			background is nice.
		</p>
	</Narigo>
</PuzzlePageLayout>

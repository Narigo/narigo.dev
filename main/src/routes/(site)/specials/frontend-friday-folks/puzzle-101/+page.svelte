<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q,#0000 100px,#161616 0),
      radial-gradient(1q,#0000 35px,#000000 0 50px, #0000 0) -78q  -45q,
      radial-gradient(1q,#0000 35px,#000000 0 50px, #0000 0)  78q  -45q,
      radial-gradient(1q,#0000 35px,#000000 0 50px, #0000 0)   0q  85px,
      radial-gradient(1q,#000 25px,#E96A23 0 35px,#000 0 50px,#A22015 0 95px,#000 0 100px,#161616 0),
      black
    ;
  }
</style>`;
</script>

<PuzzlePageLayout title="Sharingan" puzzleId="101">
	<Puzzle title="Solution with gradients" {solution} />
	<Narigo>
		<p>
			This is one of the puzzles that really scream "gradients", right? At least that's what I
			thought here and the final code seems to be like that.
		</p>
	</Narigo>
</PuzzlePageLayout>

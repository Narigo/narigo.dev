<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      linear-gradient(130deg, #3210 100px, #E38F66 0 140px, #3210 0) 40px 170px / 100% 50px no-repeat,
      linear-gradient(50deg, #3210 100px, #AA445F 0 140px, #3210 0) 89px 170px / 100% 50px no-repeat,
      linear-gradient(110deg, #3210 100.5px, #FEF9CA 0 140.5px, #3210 0) 67px 80px / 100% 140px no-repeat,
      linear-gradient(70deg, #3210 100px, #C5B732 0 140px, #3210 0) 128px 80px / 100% 140px no-repeat,
      #62306D;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Letter A" puzzleId="126">
	<Puzzle title="Letter A solution" {solution} />
	<Narigo>
		<p>Multiple gradients layered on top of each other and set the height correctly.</p>
	</Narigo>
</PuzzlePageLayout>

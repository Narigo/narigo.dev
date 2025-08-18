<script>
	import { resolve } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q, transparent 65px, #243D83 0 85px, transparent) 0 0 / 100% 150px,
      radial-gradient(1q, transparent 65px, #243D83 0 85px, transparent) 50px 0px / 150px 100%,
      radial-gradient(1q, #6592CF 100px, #243D83 0)
    ;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Mandala" puzzleId="96">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This is a puzzle we did the hour before <a
				href={resolve('/specials/frontend-friday-folks/puzzle-95')}>puzzle 95</a
			>, which I wanted to use as example for different gradients. In here, we used gradients and
			repeating the pattern to get to the desired result.
		</p>
	</Narigo>
</PuzzlePageLayout>

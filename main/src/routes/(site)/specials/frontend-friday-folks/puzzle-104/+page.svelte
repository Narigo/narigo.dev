<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="" puzzleId="104">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This time, there was only Meg and me and since Meg didn't have time, we decided to make it a
			challenge for me. I've solved it to 99.9% in a little over 15 minutes and it took 30 minutes
			33 seconds to get it to 100%. Oof!
		</p>
	</Narigo>
	<Puzzle title="100% Solution with gradients" {solution} />
	<Narigo>
		<p>
			...and here we are - done with gradients and even got to 100%, finally! There is probably a
			lot of potential to make this smaller, but I am happy to got to 100% at all.
		</p>
	</Narigo>
</PuzzlePageLayout>

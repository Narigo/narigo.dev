<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Danger Noodle">
	<Puzzle title="Puzzle 74 solution" {solution} />
	<Narigo>
		This was quite hard to do. I've used gradients only and one div for the head. Since most parts
		of the gradients are the same, I've used variables extensively. I learned that you cannot use a
		variable to start off a function and another one to close it. You can put the arguments into a
		variable, if you need them though.
	</Narigo>
</PuzzlePageLayout>

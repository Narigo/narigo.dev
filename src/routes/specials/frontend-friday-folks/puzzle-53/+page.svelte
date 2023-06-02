<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = ``;
</script>

<PuzzlePageLayout title="Pastel Logo">
	<Puzzle title="Puzzle 53 solution" {solution} />
	<Narigo>
		This is the first time I used <code>isolation: isolate</code>! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to <code>position: absolute</code> them. See
		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/isolation" rel="external"
			>MDN for more information about isolation</a
		>.
	</Narigo>
</PuzzlePageLayout>

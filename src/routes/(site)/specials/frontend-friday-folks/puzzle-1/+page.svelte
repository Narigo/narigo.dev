<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*>*{background:conic-gradient(#b5e0ba,#b5e0ba)0 0/50%212q no-repeat,#5d3a3a`;
	const smallestSolution = `<style>*>*{height:384;background:conic-gradient(#5d3a3a 75%,#b5e0ba 0`;
</script>

<PuzzlePageLayout title="Simply Square">
	<Puzzle title="Almost Megs solution" {solution} />
	<Narigo
		>We haven't done this puzzle in the Frontend Friday folks, but I kind of like how it could be
		done... Looks like Meg knows how to save a character here though...!</Narigo
	>
	<Puzzle title="Smallest solution" solution={smallestSolution} />
	<Narigo
		>Finally got a smaller solution! The trick is to use height to get the body larger than usual
		and move the center of the conic gradient down.</Narigo
	>
</PuzzlePageLayout>

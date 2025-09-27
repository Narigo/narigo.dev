<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
body {
  background:
    linear-gradient(70deg,#3210 31px, #FCBE5C 0 71px, #3210 0) 175px 70px / 90px 160px no-repeat,
    conic-gradient(#0B2429, #0B2429) 225px 0px / 40px 230px no-repeat,
    conic-gradient(#0B2429, #0B2429) 135px 70px / 40px 230px no-repeat,
    #998235
  ;
}`;
</script>

<PuzzlePageLayout title="Letter N" puzzleId="128">
	<Puzzle title="Letter N solution" {solution} />
	<Narigo>
		<p>
			<Code>conic-gradient</Code>s in conjunction with background image limitations are useful to
			draw single color blocks.
		</p>
	</Narigo>
</PuzzlePageLayout>

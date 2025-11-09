<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div o>
<div a></div>
<div b></div>
<div c></div>
</div>
<style>
  body {
    background: #6592CF;
  }
  [o]{
    -webkit-box-reflect:right;
    width: 50%;
  }
  [a],[b],[c] {
    position: absolute;
    top:50%;
    right:50%;
    background: linear-gradient(38.5deg, #0000 78px, #293D7E 0 102px, #0000 0);
    height: 100px;
    width: 125px;
  }
  [b]{
    top:100px;
  }
  [c]{
    top:50px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Chevron" puzzleId="112">
	<Puzzle title="Gradient Mirror Solution" {solution} />
	<Narigo>
		<p>
			I had multiple, different solutions to this puzzle. One of them was using a <Code
				>linear-gradient</Code
			> in three elements and a <Code>-webkit-box-reflect</Code> to mirror them to the right.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body{display:grid;place-items:center;background:conic-gradient(#0000 0 135deg,#4F77FF 0 225deg,#0000 0) 0 9px no-repeat,#191919}
  div{
    background: conic-gradient(at 50% 110px, #F9E492 0 135deg, #191919 0 225deg, #F9E492 0) no-repeat,#191919;
    border-radius:50%;
    height:200px;
    width:200px;
    }
</style>
`;
</script>

<PuzzlePageLayout title="Summit">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		This time, we had to be quick. There is not much to say about it, but I didn't get to 100% until
		I moved the gradients into two different parts (<Code>body</Code> and <Code>div</Code>). Meg
		made this work before me and gave me the hint to split it. I liked the use of <Code
			>at 50% 110px</Code
		>
		part to set the gradient center point for conic gradients...!
	</Narigo>
</PuzzlePageLayout>

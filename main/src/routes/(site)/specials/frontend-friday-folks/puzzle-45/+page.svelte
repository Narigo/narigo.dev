<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
  <div></div>
</div>
<dt></dt>
<style>
  body {
    background: #1A4341;
    box-sizing: border-box;
    border-left: 65px solid #1A4341;
    margin: 0;
  }
  body>div {
    border: 30px solid #F3AC3C;
    border-top-width: 0;
    border-right-width: 15px;
    display: flex;
    justify-content: flex-end;
    width: 90px;
    height: 180px;
    -webkit-box-reflect: right;
  }
  div>div {
    border-left: 30px solid #998235;
    border-bottom: 30px solid #998235;
    height: 120px;
    width: 30px;
  }
  dt {
    background: linear-gradient(#1A4341 30px, #998235 0 60px, #1A4341 30px);
    border-right: 15px solid #F3AC3C;
    height: 90px;
    width: 120px;
    -webkit-box-reflect: right;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Magical Tree" puzzleId="45">
	<Puzzle title="Puzzle 45 solution" {solution} />
	<Narigo
		>Finally I had a puzzle where I could use <Code>-webkit-box-reflect</Code>. I now know that it
		doesn't span a size, so centering something is not as easy, if you want the reflection to be
		counted as well. I used selectors instead of classes and ids this time, just to not having to
		name the boxes.</Narigo
	>
</PuzzlePageLayout>

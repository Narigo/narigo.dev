<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div b></div>
<div s></div>
<div h></div>
<style>
  body {
    background:#F3AC3C;
    display:grid;
    align-items:center;
    justify-content:center;
    grid-template-columns:170px 100px 40px;
  }
  [b] {
    display:grid;
    place-items:center left;
    height:120;
    background:
      radial-gradient(circle at 120px 50%,#1A4341 20px,#F3AC3C 0 25px,#998235 0 50px,#0000 0),
      radial-gradient(circle at 60px 50%,#998235 60px,#0000 0);
    z-index:1;
  }
  [s] {
    margin:-5;
    height:20;
    background: #1A4341;
  }
  [h] {
    display:grid;
    place-items:center;
    border-radius:10px;
    height:20;
    padding:5;
    background: #998235;
  }
  *::before,*::after {
    border-radius: 5px;
    background:#1A4341;
  }
  [b]::before {
    content:'';
    margin-left:40;
    width:10;
    height:40;
  }
  [h]::before,[h]::after {
    content:'';
    width:20;
    height:4;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Ukulele">
	<Puzzle title="Puzzle 78 solution" {solution} />
	<Narigo>
		There is a small overlap of the shaft to the body part. I used negative margins here to make it
		appear bigger and had to use <Code>z-index</Code> to put the body on top of it. I think reversing
		the order of the grid divs would have worked as well, but I didn't test it because <Code
			>z-index</Code
		> seemed like a simple fix.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="c r"></div>
<div class="d m"></div>
<div class="d l"></div>
<style>
  body {margin:0;background:#0B2429;}
  div {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #F3AC3C;
    border-radius: 50%;
  }
  .m {
    background: #998235;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
  .c {
    bottom: 50%;
    left: 50%;
  }
  .d {
    border-top-right-radius: 0;
  }
  .l {
    top: 50%;
    right: 50%;
  }
</style>
`;

	const solution2 = `<div></div>
<div id=b></div>
<style>
  body {background: #0B2429;display: grid;place-items:center;}
  #b {
    position: absolute;
    transform: scale(-1);
    z-index: -1;
  }
  div {
    background: #F3AC3C;
    border-radius: 50% 0 50% 50%;
    position: relative;
    height: 120px;
    width: 120px;
  }
  div:before,div:after {
    border-radius: 50% 0;
    content: '';
    inset: 0;
    position: absolute;
  }
  div:before {
    background: #998235;
  }
  div:after {
    background: #F3AC3C;
    inset: 60px 60px -60px -60px;
    border-radius: 50% 0 50% 50%;
  }
</style>
`;
	const gridSolution = `<div>
  <hr/>
  <hr/>
  <hr a b/>
  <hr/>
  <hr/>
  <hr/>
  <hr a/>
  <hr/>
  <hr a/>
  <hr/>
</div>
<style>
  body{background:#62306D;margin:25 -50}
  div {
    display:grid;
    grid-template-columns:repeat(5,100px);
    gap:0;
  }
  hr{width:100;height:100;border:0}
  [a]{background:#F7EC7D;border-radius:0 0 50%50%}
  [b]{rotate:180deg;margin:25+0-8}
</style>
`;
</script>

<PuzzlePageLayout title="Ups n Downs" puzzleId="4">
	<Puzzle title="Puzzle 4 solution" {solution} />
	<Narigo
		>In my first solution I used regular positioning and thought the left-bottom and middle one were
		of similar shape.</Narigo
	>
	<Puzzle title="Second solution for puzzle 4" solution={solution2} />
	<Narigo
		>The second time I solved this, I was looking into ways how to mirror this. I wanted to use <code
			>-webkit-box-reflect</code
		>
		but it looks like it can only mirror on the X or the Y axis - not both at the same time. So I resorted
		to the <Code>scale(-1)</Code> trick. For this to work, the boxes needed to be duplicated.</Narigo
	>
	<Puzzle title="Grid solution for puzzle 4" solution={gridSolution} />
	<Narigo>Ok, the latest solution was using existing elements in a grid.</Narigo>
</PuzzlePageLayout>

<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div l></div>
<div l r></div>
<div h></div>
<div y></div>
<div y r></div>
<div s></div>
<div l n></div>
<div l n r></div>
<style>
  body{background:#191919}
  div {
    position:absolute;
    background: #FE5F55;
    height: var(--h);
    width: var(--w);
  }
  [h] {
    top:75;
    left:135;
    border-radius:60px;
    --h:150px;
    --w:130px;
  }
  [s] {
    background:#A64942;
    top:145;
    left:125;
    border-radius:70px 70px 55px 55px;
    --h:100;
    --w:150;
  }
  [y] {
    top:125;
    left:160;
    background:#000;
    border-radius:50%;
    --h:10;
    --w:10;
  }
  [l] {
    background:#000;
    top:75;
    left:145;
    border-radius:50%;
    border: 5px solid #FE5F55;
    rotate:45deg;
    --h:10;
    --w:20;
  }
  [n] {
    border-color: #0000;
    top:170;
    rotate:-45deg
  }
  [r] {
    left:225;
    transform:rotate(90deg);
  }
  [y]+[r] {
    left:230;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Hippo" puzzleId="75">
	<Puzzle title="Puzzle 75 solution" {solution} />
	<Narigo>
		I've tried using <Code>-webkit-box-reflect</Code>, but it doesn't seem to work out with absolute
		positioning...? Anyways, I think the main idea here is using border radius in pixels and
		percentages to get to 100%.
	</Narigo>
</PuzzlePageLayout>

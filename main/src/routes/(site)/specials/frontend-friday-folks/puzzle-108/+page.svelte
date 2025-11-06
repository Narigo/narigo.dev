<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div o><div i>
<style>
  body {
    background:#000;
    display: grid;
    place-items:center;
  }
  [i],[i]:after{
    content:'';
    grid-area: 1/1/2/2;
    display:grid;
    width:200.5;
    height: 80.5;
    background: #0000;
    border: 5px solid #EBAE11;
    border-radius:50%;
    z-index:1;
  }
  [i]:after{
    width: 120.5;
    height: 60;
  }
  [o]:before,[o]:after{
    content:'';
    grid-area: 1/1/2/2;
    border-radius: 12px;
    width: 270;
    height: 90;
    background:
      radial-gradient(1q,#EBAE11 25px,#000);
  }
  [o]:after{
    width:240;
    height:120
  }
  div {
    display: grid;
    place-items:center;
    width: 300;
    height: 150;
    background: linear-gradient(105deg,#E96A23 120px,#EBAE11 0 170px,#E96A23 0 184px,#EBAE11 0 209px,#E96A23 0);
  }
</style>
`;
</script>

<PuzzlePageLayout title="Clow Card" puzzleId="108">
	<Puzzle title="100% Solution" {solution} />
	<Narigo>
		<p>
			I suppose instead of the <Code>&lt;div i&gt;</Code>, we could have used radial-gradients...
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div b></div>
<style>
  *{margin:0}
  div,div:after {
    position:absolute;
    width: 200;
    height: 300;
    background:
      radial-gradient(1q at 125px 215px, #FADE8B 15px, #0000),
      radial-gradient(1q at 165px 215px, #FADE8B 15px, #0000),
      radial-gradient(1q at 165px 85px, #FADE8B 15px, #0000),
      linear-gradient(to right,#E3516E 165px, #FADE8B 0)0 50%/100% 160px no-repeat,
      #E3516E
    ;
  }
  div:after{
    content:"";
    height: 100;
    top:100;
    right:15;
    border-radius: 10px;
    background: #E3516E;
  }
  [b] {rotate:180deg;transform-origin:100%}
</style>`;
</script>

<PuzzlePageLayout title="Letter I" puzzleId="127">
	<Puzzle title="Letter I solution" {solution} />
	<Narigo>
		<p>
			The image can be rotated, so we had different solutions today. While Meg was using the X-axis for rotating, I used the Y-axis.
		</p>
	</Narigo>
</PuzzlePageLayout>

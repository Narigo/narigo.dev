<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
body{background:#EFF2F1;display:grid;place-items:center;}
div{width:180;height:180;background:#1c1c1c;
    clip-path:shape(evenodd
      from 0 0,
      hline by 86px,
      arc to 115px 90px of 21px 20px cw,
      line to 155px 160px,
      line to 180px 175px,
      vline by 5px,
      hline by -58px,
      line to 69px 90px,
      hline by -9px,
      vline by 70px,
      line to 80px 170px,
      vline by 10px,
      hline by -80px,
      vline by -10px,
      line to 20px 160px,
      vline by -140px,
      line to 0px 10px,
      close,
      move to 60px 15px,
      hline by 20px,
      arc to 80px 75px of 1q cw,
      hline by -20px
    );
</style>`;
</script>

<PuzzlePageLayout title="Root Learn" puzzleId="125">
	<Puzzle title="Root Learn solution" {solution} />
	<Narigo>
		<p>
			Shaishav joined late and rescued the clip-path solution! Using <Code>arc</Code> works, if you know
			how to manipulate its values. Obviously, Shaishav had the right intuition and got us to the right
			values that it counted as 100%. Thanks!
		</p>
	</Narigo>
</PuzzlePageLayout>

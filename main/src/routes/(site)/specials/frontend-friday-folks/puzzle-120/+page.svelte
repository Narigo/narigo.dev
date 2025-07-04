<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    border: 20px solid #54C144;
    background:conic-gradient(at 145px 180px, #C74E4E .4turn,#FFFFFF 0 .6turn,#54C144 0 .75turn,#C74E4E 0);
    margin:0;
  }
  div {
    background: #000;
    height:100%;
    clip-path: shape(
      evenodd
      from 0 0, hline by 100%, vline by 100%, hline to 0, move to 40px 40px, hline by 80px, vline by 40px, hline by -80px, move to 160px 40px, hline by 80px, vline by 40px, hline by -80px, move to 40px 120px, hline by 200px, vline by 40px, hline by -200px, move to 280px 40px, hline by 40px, vline by 180px, hline by -40px, move to 40px 180px, hline by 40px, vline by 10px, hline by -10px, vline by 5px, hline by 20px, vline by 10px, hline by -20px, vline by 5px, hline by 10px, vline by 10px, hline by -40px, vline by -10px, hline by 10px, vline by -20px, hline by -10px, move to 100px 195px, hline by 10px, vline by 10px, hline by -10px, move to 120px 195px, hline by 10px, vline by 10px, hline by -10px);
  }
</style>
`;
	const differentClip = `<div></div>
<style>
  body {
    border: 20px solid #54C144;
    background:conic-gradient(at 145px 180px, #C74E4E .4turn,#FFFFFF 0 .6turn,#54C144 0 .75turn,#C74E4E 0);
    margin:0;
  }
  div {
    background: #000;
    height:100%;
    clip-path: shape(
      evenodd
      from 0 0, move to 40px 40px, hline by 80px, vline by 40px, hline by -80px, move to 160px 40px, hline by 80px, vline by 40px, hline by -80px, move to 40px 120px, hline by 200px, vline by 40px, hline by -200px, move to 280px 40px, hline by 40px, vline by 180px, hline by -40px, move to 40px 180px, hline by 40px, vline by 10px, hline by -10px, vline by 5px, hline by 20px, vline by 10px, hline by -20px, vline by 5px, hline by 10px, vline by 10px, hline by -40px, vline by -10px, hline by 10px, vline by -20px, hline by -10px, move to 100px 195px, hline by 10px, vline by 10px, hline by -10px, move to 120px 195px, hline by 10px, vline by 10px, hline by -10px);
  }
</style>
`;
</script>

<PuzzlePageLayout title="Tank" puzzleId="120">
	<Puzzle title="Tank" {solution} />
	<Narigo>
		<p>
			During the regular VirtualCoffee CSSBattle, I checked whether a line through the tank and its
			missiles was possible. This allowed to draw a conic gradient for all colors in the background
			and using clip-path to cut out different shapes. Removing the first hline and vline values
			(after the <Code>from</Code> up to <Code>move to</Code>) will show the gradient in the
			background. See solution below:
		</p>
	</Narigo>
	<Puzzle title="Tank" solution={differentClip} />
	<Narigo>
		<p>
			Here you can see what the clip-path actually cuts while the colors are done by a
			conic-gradient..
		</p>
	</Narigo>
</PuzzlePageLayout>

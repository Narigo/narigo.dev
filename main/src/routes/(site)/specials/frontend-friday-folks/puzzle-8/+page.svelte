<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="r">
  <div class="a"></div>
  <div class="b o"></div>
  <div class="c"></div>
  <div class="d o"></div>
  <div class="e"></div>
  <div class="f o"></div>
  <div class="g"></div>
</div>
<div class="l"></div>
<style>
  body {margin:0;background:#6592CF;}
  .r {
    background: #060F55;
    position: absolute;
    top: calc(50px + 25px);
    left: calc(50% - calc(140px / 2));
    display: flex;
    height: 175px;
    width: 140px;
    border-radius: 0 0 140px 140px;
  }
  .r > * {position: absolute;top: -25px; background: #060F55; width: 20px; height: 25px;border-radius: 50% 50% 0 0;}
  .r > .o {top: -25px; background: #6592CF; width: 20px; height: 110px;border-radius: 0 0 calc(20px / 2) calc(20px / 2);}
  .b {left: 20px}
  .c {left: 40px}
  .d {left: 60px}
  .e {left: 80px}
  .f {left: 100px}
  .g {left: 120px}
  .l {position: absolute;background:#060F55;left:calc(50% - 10px); width:20px; height: 50px; bottom: 0}
  
</style>`;
</script>

<PuzzlePageLayout title="Forking Crazy" puzzleId="8">
	<Puzzle title="Puzzle 8 solution" {solution} />
	<Narigo>
		This solution is definitely a bit older and I would probably do it differently today. At least
		use the nesting feature of CSS.
	</Narigo>
</PuzzlePageLayout>

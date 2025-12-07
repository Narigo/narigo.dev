<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div a></div>
<div b></div>
<div c></div>
<p>
<style>
  &{background:#1A4341}
  div {
    position:fixed;
    border:5px solid #F3AC3C;
    border-radius: 5px;
    top:50px;
    left:195px;
    height:170;
  }
  [b] {
    transform: rotate(-60deg);
    transform-origin: 23px 90px;
  }
  [c] {
    transform: rotate(-120deg);
    transform-origin: 11px 90px;
  }
  p{
    position:fixed;
    inset:0;
    background:
      radial-gradient(1q,#998235 5px, #3210 0) 25px -25px,
      radial-gradient(1q,#998235 10px, #3210 0) 0 25px,
      radial-gradient(1q,#998235 15px, #3210 0) -15px -15px,
      radial-gradient(1q,#F3AC3C 50px, #3210 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Corona Virus" puzzleId="47">
	<Puzzle title="Puzzle 47 solution" {solution} />
	<Narigo>
		I think we never did this puzzle in VirtualCoffee. Maybe we forgot or the title put us off at
		the time... Anyways, I solved it like this when I saw that puzzle 47 was still missing in the
		list!
	</Narigo>
</PuzzlePageLayout>

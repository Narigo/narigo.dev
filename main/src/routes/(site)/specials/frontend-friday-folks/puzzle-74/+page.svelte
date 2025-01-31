<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
<style>
  body {
    --g: #191919 0 15px, #E08027 0 20px, #191919 0 30px, #E08027 0 35px, #0000 0;
    --r: radial-gradient(circle at 100% 100%,var(--g));
    --b: radial-gradient(circle at 50% 0,var(--g));
    --t: radial-gradient(circle at 50% 100%,var(--g));
    --h: linear-gradient(to right, #E08027 0 5px, #0000 0 15px, #E08027 0 20px, #0000 0);
    --v: linear-gradient(#E08027 0 5px, #0000 0 15px, #E08027 0 20px, #0000 0);
    --l: / 20px 55px no-repeat;
    --ll: 72px / 20px 155px no-repeat;
    --e: / 70px 35px no-repeat;
    background:
      var(--v) 245px 140px / 30px 55px no-repeat,
      var(--h) 15px 72px var(--l),
      var(--h) 65px var(--ll),
      var(--h) 115px var(--ll),
      var(--h) 165px var(--ll),
      var(--h) 215px 172px var(--l),
      var(--r) 180px 140px var(--e),
      var(--t) 15px 40px var(--e),
      var(--t) 115px 40px var(--e),
      var(--b) 65px 225px var(--e),
      var(--b) 165px 225px var(--e),
      var(--b) -35px 125px var(--e),
      #191919;
  }
  div {
    position:fixed;
    top:135;
    left:265;
    width:50;
    height:30;
    background:
      radial-gradient(circle at 35px 7px, #191919 5px, #0000 0),
      radial-gradient(circle at 35px 23px, #191919 5px, #0000 0),
      #E08027;
    border-radius:25px 55px 55px 25px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Danger Noodle" puzzleId="74">
	<Puzzle title="Puzzle 74 solution" {solution} />
	<Narigo>
		This was quite hard to do. I've used gradients only and one div for the head. Since most parts
		of the gradients are the same, I've used variables extensively. I learned that you cannot use a
		variable to start off a function and another one to close it. You can put the arguments into a
		variable, if you need them though.
	</Narigo>
</PuzzlePageLayout>

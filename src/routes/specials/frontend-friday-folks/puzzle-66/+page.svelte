<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(#191919 10px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0),
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`;

	const solutionBackgroundPosition = `<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0) 0 10px no-repeat,
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Batmicky">
	<Puzzle title="Puzzle 66 solution" {solution} />
	<Narigo>Again, having lots of fun with gradients!</Narigo>
	<Puzzle title="Puzzle 66 solution" solution={solutionBackgroundPosition} />
	<Narigo>
		There is a minor improvement with this, by moving the background position down by 10px using
		no-repeat.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    background: 
      radial-gradient(circle at 100% 100%, #824B20 100px, #0000 0),
      radial-gradient(circle at 0 100%, #E08027 100px, #0000 0),
      radial-gradient(circle, #FFF58F 30px, #0000 0) 0 20px,
      #F2AD43;
    width: 150px;
    height: 200px;
    border-radius: 75px 75px 20px 20px;
  }
</style>
`;

	const solutionAnimation = `<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  div {
    background:
      radial-gradient(circle at 100% 100%, #999 90px, #bbb 100px, transparent 0) no-repeat,
      radial-gradient(circle at 0 100%, #666 90px, #999 100px, transparent 0) no-repeat,
      radial-gradient(circle at 50% 120px, #FFF58F 30px, #f30 0 50px, #f60 60px, #f90 70px, transparent 100px) no-repeat,
      deepskyblue;
    width: 150px;
    height: 200px;
    border-radius: 75px 75px 20px 20px;
    animation: anim 2s infinite ease-in-out;
  }

  @keyframes anim {
    0% {
      rotate: -15deg;
      background-position-y: 0, 0, -50px, 0;
    }
    50% {
      rotate: 15deg;
      background-position-y: 0, 0, 50px, 0;
      background-position-x: 50px, -50px, 0, 0;
    }
    100% {
      rotate: -15deg;
      background-position-y: 0, 0, -50px, 0;
    }
  }
</style>`;
</script>

<PuzzlePageLayout title="Sunset">
	<Puzzle title="Puzzle 62 solution" {solution} />
	<Narigo>
		Ari, Satoshi and I were doing this together today. This was a nice puzzle to do with radial
		gradients again!
	</Narigo>
	<Puzzle title="Extra: Psychedelic animation" solution={solutionAnimation} />
	<Narigo>
		Since we were done pretty quickly, we played around with different gradients, came up with some
		kind of psychedelic effect and added some animation to the mix.
	</Narigo>
</PuzzlePageLayout>

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

	const solutionAnimation = ``;
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

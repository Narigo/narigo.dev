<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items:center;
  }
  div {
    background: #E08027;
    border:30px solid #824B20;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  div:after {
    content: '';
    position: absolute;
    margin: -10px;
    height: 80px;
    width: 80px;
    border: 20px solid #FFF58F;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 50%;
    background:
      radial-gradient(circle at 80px 80px, #FFF58F 10px, #0000 0) -5px -75px / 200% 200% no-repeat,
      radial-gradient(circle at 80px 80px, #FFF58F 10px, #0000 0) -75px -5px / 200% 200% no-repeat
    ;
    rotate: 45deg;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Door Knob">
	<Puzzle title="Puzzle 64 solution" {solution} />
	<Narigo>
		First time that David joined and he actually managed to get it done on time! My solution here
		uses radial gradients again, but it's always hard for me to get the right values where the
		circles need to be put in order to get this half circle shape. Especially when you have to take
		rotation into account as well...!
	</Narigo>
</PuzzlePageLayout>

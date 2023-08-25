<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div a></div>
<div b></div>
<style>
  body {
    background: #191919;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    gap: 25px;
  }
  div {
    height: 200px;
  }
  [a] {
    box-sizing: border-box;
    background: #5DBCF9;
    border: 75px solid #191919;
    border-left-width: 67px;
    border-right-color: #5DBCF9;
    border-radius: 80px 0 0 80px;
  }
  [b] {
    width: 100px;
    background: radial-gradient(
      circle at 0 50%, #0000 40px, #5DBCF9 0 50px, #0000 0 65px, #5DBCF9 0 75px, #0000 0 90px, #5DBCF9 0 100px, #0000 0
    );
  }
</style>
`;
</script>

<PuzzlePageLayout title="Max Volume">
	<Puzzle title="Puzzle 65 solution" {solution} />
	<Narigo>
		The idea used here yielded 100%, but I'm pretty sure if you want to really get the same picture,
		you'd do it differently.
	</Narigo>
</PuzzlePageLayout>

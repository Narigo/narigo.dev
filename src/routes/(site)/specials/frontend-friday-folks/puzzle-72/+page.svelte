<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
<div>
<div></div>
</div>
</div>
<style>
  body {
    display:grid;place-items:center;background:#243D83
  }
  div {
    width: 140px;
    height: 140px;
    background: #6592CF;
    border-radius:35px;
    rotate:45deg;
  }
  body>div>div {
    scale: 0.96;
    width: 140px;
    height: 140px;
  }
  body>div>div>div {
    rotate:-90deg;
    background:
      radial-gradient(circle at 60px 55px,#6592CF 5px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 80px 55px,#6592CF 5px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 30px 30px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 110px 30px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 70px 10px,#6592CF 25px,#0000 0) 0 0 no-repeat,
      radial-gradient(circle at 70px 65px,#243D83 31px,#0000 0) 0 0 no-repeat,
      linear-gradient(to bottom,#243D83 50px,#0000 0) 50% 10px / 60px no-repeat
    ;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Sheep">
	<Puzzle title="Puzzle 72 solution" {solution} />
	<Narigo>
		This one is again something I only got 99.9% for. David has seen this as two divs with one
		rotated 45 degrees. I thought of having eight circles on the outside but when looking at it more
		closely, it seems like circles wouldn't fit.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r></r><r></r><r></r><r></r>
<r></r><r></r><r></r><r></r>
<r></r><r></r><r></r><r></r>
<style>
  r {
    display:grid;
    background: #191919;
    height: 110px;
  }
  r:nth-child(even) {
    margin-top:-50px;
  }
  body {
    background: #5DBCF9;
    display: grid;
    grid-template-columns: 45px 140px 140px 45px;
    gap: 40px 10px;
    margin:-30px 0;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Video Reel" puzzleId="67">
	<Puzzle title="Puzzle 67 solution" {solution} />
	<Narigo>
		It's a grid! I first tried it with nested grids: First for the columns, the inner ones for the
		rows. It looks like that renders a bit differently, since I couldn't get it to 100%. Thanks to
		Ariadne for sharing a simpler solution: It made me remove the inner grids, which worked out way
		better!
	</Narigo>
</PuzzlePageLayout>

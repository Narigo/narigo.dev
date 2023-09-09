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

<PuzzlePageLayout title="Video Reel">
	<Puzzle title="Puzzle 67 solution" {solution} />
	<Narigo>It's a grid!</Narigo>
</PuzzlePageLayout>

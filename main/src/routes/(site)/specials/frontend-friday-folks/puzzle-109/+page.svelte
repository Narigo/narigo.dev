<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const gridSolution = `<div>
  <p><p><p><p>
  <p><p><p><p b>
  <p><p><p b><p b>
  <p>
</div>
<style>
  &{background:#191919}
  div {
    margin:20 12;
    display:grid;
    grid-template-columns:repeat(4,40px);
    gap:20px;
  }
  p{margin:0;width:40;height:40;border-radius:50%;background:#F6E59C}
  [b]{background:#fff0}
</style>`;

	const gradientSolution = `<style>&{background:linear-gradient(135deg,#0000 216q,#191919 0),radial-gradient(#F6E59C 20px,#191919 0)10px 10px/60px 60px`;
</script>

<PuzzlePageLayout title="Curtain">
	<Puzzle title="Grid Solution" solution={gridSolution} />
	<Narigo>
		<p>
			The first solution used a grid. It should be easy to follow along, but it means having lots of
			elements as well.
		</p>
	</Narigo>
	<Puzzle title="Gradient Solution" solution={gradientSolution} />
	<Narigo>
		<p>
			This was a lot shorter and we did this with Alex' on stream. He learned how to do gradients
			and I later code-golfed to this solution.
		</p>
	</Narigo>
</PuzzlePageLayout>

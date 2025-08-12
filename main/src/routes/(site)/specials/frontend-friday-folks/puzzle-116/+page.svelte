<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<p l>
<p r>
<div>
<style>
  &{background:#293D7E}
  p {
    position:fixed;
    background:#6E91CA;
    top:149;
    left: 115;
    width: 60;
    height: 80;
    border-radius: 60px 60px 80px 80px;
  }
  [r]{left:225}
  div{border:20px solid #6E91CA;border-bottom:0;border-radius:85px 85px 0 0;height:130;width:130;position:fixed;left:115;top:45}
</style>`;
</script>

<PuzzlePageLayout title="Headphones" puzzleId="116">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			I guess this is almost straightforward. Using single elements turned out quite effective here.
		</p>
	</Narigo>
</PuzzlePageLayout>

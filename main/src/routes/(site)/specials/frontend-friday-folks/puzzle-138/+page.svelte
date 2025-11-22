<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<p>
<style>
  *{background:#926927}
  p,p:after,p:before {
    margin:0;
    position:absolute;
    content:'';
    width:100;
    height:100;
    border-radius: 100% 0;
    background:#6D480A;
    transform-origin:0 100%;
    transform:translate(192px, 112px);
  &:after {
    background: #fff;
    transform:translate(0px, 1px) rotate(-45deg);
  }
  &:before {
    transform:rotate(-90deg);
`;
</script>

<PuzzlePageLayout title="Lotus" puzzleId="138">
	<Puzzle title="Lotus solution" {solution} />
	<Narigo>
		<p>
			No radial gradients here, because it was so much easier to use divs with border radius for
			this...!
		</p>
	</Narigo>
</PuzzlePageLayout>

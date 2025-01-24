<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>body{display:grid;place-items:center;background:#998235}
  div {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background:
      radial-gradient(#0B2429 60px, #FCBE5C 0 70px, #0000 0),
      linear-gradient(#0000 0 90px, #0B2429 0 120px, #0000 0),
      linear-gradient(90deg, #0000 0 90px, #0B2429 0 120px, #0000 0),
      linear-gradient(45deg, #0000 0 133px, #0B2429 0 163px, #0000 0),
      linear-gradient(-45deg, #0000 0 133px, #0B2429 0 163px, #0000 0),
      radial-gradient(#0B2429 80px, #FCBE5C 0 95px, #0B2429 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Poker Chip" puzzleId="154">
	<Puzzle title="Puzzle 154 solution" {solution} />
	<Narigo>
		Savvy Saturday Stylers Slaying CSSBattle.dev is the Saturday version of this. On Nov 18th, 2023,
		they played the "Poker Chip". I thought this should be easy to do with a dashed border, but when
		I tried that, it became clear that it's not easy to control the dashed border without using
		images. Images are forbidden in CSS battles, so this approach fell apart pretty quickly after
		seeing the dashes being a lot different to what we see here. I ended up using gradients once
		again... 😅
	</Narigo>
</PuzzlePageLayout>

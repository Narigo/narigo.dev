<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div b></div>
<style>
  &{background:#F3AC3C}
  div {
    position:fixed;
    width: 150;
    height: 100;
    --r: radial-gradient(circle at 0 0, #1A4341 10px, #F3AC3C 0);
    background:
      var(--r) 140px 40px / 10px 10px no-repeat,
      var(--r) 90px 90px / 10px 10px no-repeat,
      radial-gradient(circle at 110px 60px, #F3AC3C 10px, #1A4341 0) 0 0 / 110px 60px no-repeat,
      linear-gradient(#F3AC3C, #F3AC3C) 100px 50px no-repeat,
      #1A4341;
    border-radius: 10px;
    top:65;left:65
  }
  [b] {
    transform-origin: 90% 85%;
    rotate: 180deg
  }
</style>`;
</script>

<PuzzlePageLayout title="Building Blocks" {solution}>
	<Narigo>
		I didn't have too much time during the event, but I later came up with a solution for this
		puzzle. Since this was "almost" mirrored, I figured to use a div and use a rotation at a
		specific transform origin. To get the "inside" border radius pieces, I used cut out some radial
		gradients to fake them.
	</Narigo>
</PuzzlePageLayout>

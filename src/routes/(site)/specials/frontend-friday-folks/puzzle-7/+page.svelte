<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
<style>
  body {background:#0B2429}
  .a {background:#1A4341;left: calc(50% - 125px);}
  .b {background:#998235;left: calc(50% - 75px);}
  .c {background:#F3AC3C;left: calc(50% - 25px);}
  div {
    position: absolute;
    border-radius: calc(200% / 3) 0 calc(200% / 3) 0;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
    height: 150px;
    width: 150px;
    background: #dd6b4d;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Leafy Trail">
	<Puzzle title="Puzzle 7 solution" {solution} />
	<Narigo>
		I took a very straight-forward approach to this, having three divs and let them share most code. <code
			>border-radius</code
		> with multiple values allowed me to correctly shape the divs.
	</Narigo>
</PuzzlePageLayout>

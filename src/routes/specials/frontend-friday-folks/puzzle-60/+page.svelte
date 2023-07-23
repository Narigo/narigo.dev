<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
<div a></div>
<div b></div>
</r>
<style>
  body {
    background:#191919;
    display: grid;
    place-items:center;
  }
  r{
    display: grid;
    place-items:center;
    background: #4F77FF;
    row-gap:50px;
    padding-top:25px;
    grid-template-columns: repeat(4, 50px);
    height: 125px;
  }
  [a],[b] {
    background: #191919;
    height:50px;
    width:50px;
    transform: skewY(45deg);
  }
  [b] {
    transform: skewY(-45deg);
  }
</style>`;
</script>

<PuzzlePageLayout title="Evil Triangles">
	<Puzzle title="Puzzle 60 solution" {solution} />
	<Narigo>
		Satoshi had the great idea to add a background and draw black zig-zag lines on top. I've done
		that with <code>grid</code> today and it felt quite nice 😅
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div e></div><div h></div><div m></div><div n></div>
<style>
  body {
    background: #F3AC3C;
    display:grid;
    place-items:center;
  }
  div {
    position:absolute;
  }
  [e] {
    top:65;
    background:
      radial-gradient(circle at 30px 50%,#1A4341 20px,#998235 0 30px,#0000 0) 0 0 / 110px;
    width:170;
    height:60;
  }
  [h] {
    background:
      radial-gradient(circle at 35px 70px, #1A4341 10px, #0000 0),
      radial-gradient(circle at 115px 70px, #1A4341 10px, #0000 0),
      conic-gradient(from -45deg at 50% 25px, #1A4341 90deg, #998235 0);
    border-radius: 75px 75px 60px 60px;
    width:150;
    height:150;
  }
  [m] {
    top:170;
    width:100;
    height:40;
    border-radius:25px 25px 60px 60px;
    background:
      radial-gradient(circle at 50% 0, #fff 10px, #1A4341 0 20px, #0000 0) -5px 10px / 80% 50% no-repeat,
      radial-gradient(circle at 50% 0, #fff 10px, #1A4341 0 20px, #0000 0) 25px 10px / 80% 50% no-repeat,
      #fff;
  }
  [n] {
    width:10;
    height:20;
    background:#1A4341;
    top:160;
  }
</style>`;
</script>

<PuzzlePageLayout title="Happy Tiger">
	<Puzzle title="Puzzle 73 solution" {solution} />
	<Narigo>
		Lots of gradients! 100% again! Finally! Yes! This time, using background positioning and
		background sizes to get the correct result.
	</Narigo>
</PuzzlePageLayout>

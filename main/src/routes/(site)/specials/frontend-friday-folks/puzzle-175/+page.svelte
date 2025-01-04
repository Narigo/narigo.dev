<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div h>
<div o></div>
<div n></div>
<div el>
  <div p></div>
</div>
<div er>
    <div p></div>
</div>
</div>
<style>
  body {
    background:#ED6A9D;
  }  
  [h] {
    width: 180px;
    height: 150px;
    background: #050044;
    position: fixed;
    top: 90;
    left:110;
    border-radius:50%
  }
  [el],[er] {
    background: #FFC100;
    position:fixed;
    top:130;
    left: 145;
    width: 40;
    height: 40;
    rotate:-45deg;
    border-radius: 0 50%;
  }
  [er] {
    left: 215;
  }
  [p] {
    height:30;
    width:10;
    background:#050044;
    border-radius: 50%;
    transform: rotate(45deg) translate(14px,-7px);
    position:fixed;
  }
  [n] {
    border:15px solid #0000;
    border-top-color:#ED6A9D;
    position:fixed;
    top:185;
    left:185;
  }
  [o] {
    position:fixed;
    top:65;
    left:120;
    right:120;
    bottom:100;
    background:#050044;
    clip-path: polygon(0 0, 80px 50px, 100% 0, 152px 100%, 8px 100%);
  }
</style>
`;
</script>

<PuzzlePageLayout title="Evil Cat">
	<Puzzle title="Puzzle 175 solution" {solution} />
	<Narigo>
		Amy took over today and selected a random puzzle. It took me a few tries, but I finally got to
		100%. The ears were problematic for me. I tried rotating them, but only using clip-path seemed
		to work for 100% for me. I'm wondering whether that's the correct approach or whether I've just
		not found the right numbers for rotating the ears.
	</Narigo>
</PuzzlePageLayout>

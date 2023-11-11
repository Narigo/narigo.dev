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
    border:80px solid #050044;
    border-top:50px solid#0000;
    position:fixed;
    top:65;
    left:120;
    right:120;
    bottom:150
  }
</style>
`;
</script>

<PuzzlePageLayout title="Evil Cat">
	<Puzzle title="Puzzle 175 solution" {solution} />
	<Narigo>Only 99.8% match. No time to check how to rotate or scale this...!</Narigo>
</PuzzlePageLayout>

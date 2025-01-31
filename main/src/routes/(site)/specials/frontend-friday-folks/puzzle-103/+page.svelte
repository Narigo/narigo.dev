<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution99 = `<div class="back hair left"></div>
<div class="back hair right"></div>
<div class="face"></div>
<div class="mid hair left"></div>
<div class="mid hair right"></div>
<div class="top hair left"></div>
<div class="top hair right"></div>
<div class="mouth"></div>
<style>
  body {
    background: #161616;
  }
  .hair {
    position: absolute;
    border-radius: 50%;
    background: #EBAE11;
    height: 60px;
    width: 60px;
  }
  .back.hair.left,.back.hair.right {
    background: conic-gradient(transparent 50%, #EBAE11 0);
    transform: translate(140.5q,129.5q) rotate(-75deg);
  }
  .mid.hair.left,.mid.hair.right {
    background: conic-gradient(transparent 50%, #EBAE11 0);
    transform: translate(147px,104px) rotate(-30deg);
  }
  .top.hair.left,.top.hair.right {
    height: 118px;
    width: 120px;
    background: linear-gradient(to right, #EBAE11 18px, transparent 0);
    transform: translate(174.5px,58.5px) rotate(0deg);
  }
  .back.hair.right {
    transform: translate(202q,129.5q) rotate(-105deg);
  }
  .mid.hair.right {
    transform: translate(177px,104px) rotate(-150deg);
  }
  .top.hair.right {
    transform: translate(89.5px,58.5px) rotate(180deg);
  }
  .face {
    position: absolute;
    top: 156;
    left: 160;
    height: 60px;
    width: 80px;
    background:linear-gradient(to right,#FFFFFF 50%,#FFDEB9 0);
    border-radius: 0 0 40px 40px;
  }
  .mouth {
    position: absolute;
    top:186;
    left:189.5;
    width:22q;
    height:21q;
    border-radius: 50%;
    background:conic-gradient(transparent .25turn, #161616 .25turn .75turn, transparent 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Super Saiyan" puzzleId="103">
	<Puzzle title="99.9% Solution" solution={solution99} />
	<Narigo>
		<p>I didn't get this to 100% using divs. I need to try it with gradients, I suppose!</p>
	</Narigo>
</PuzzlePageLayout>

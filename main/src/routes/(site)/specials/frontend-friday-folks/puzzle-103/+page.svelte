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

	const solution = `<style>
  &{background:
    /* mouth */
    radial-gradient(1q at 50% 0, #161616 10px, #0000 0) 0 196px,
    /* top hair */
    radial-gradient(1q at -42px 126px,#EBAE11 60px,#0000 0) 200px 0 / 200px no-repeat,
    radial-gradient(1q at 242px 126px,#EBAE11 60px,#0000 0) 0 0 / 200px no-repeat,
    /* mid hair */
    conic-gradient(#161616 30deg,#0000 0 330deg, #161616 0) 0 18px,
    radial-gradient(1q,#EBAE11 30px,#0000 0) -15px -8px,
    radial-gradient(1q,#EBAE11 30px,#0000 0) 15px -8px,
    /* face */
    linear-gradient(to right,#fff 50%,#FFDEB9 0) 50% calc(50%) / 80px 50px no-repeat,
    radial-gradient(1q at 0% calc(50% - 23px),#FFDEB9 40px,#0000 0) calc(50% + 20px) calc(50% + 49px) / 40px 60px no-repeat,
    radial-gradient(1q at 100% calc(50% - 23px),#fff 40px,#0000 0) calc(50% - 20px) calc(50% + 49px) / 40px 60px no-repeat,
    /* back hair left */
    linear-gradient(193deg,#161616 50%,#0000 0) calc(50% - 30px) calc(50% + 9px) / 59px 61px no-repeat,
    radial-gradient(1q,#EBAE11 28px,#0000 0) -31px 11px,
    /* back hair right */
    linear-gradient(calc(360deg - 193deg),#161616 50%,#0000 0) calc(50% + 30px) calc(50% + 9px) / 59px 61px no-repeat,
    radial-gradient(1q,#EBAE11 28px,#0000 0) 31px 11px,
    #161616
   }
</style>`;
</script>

<PuzzlePageLayout title="Super Saiyan" puzzleId="103">
	<Puzzle title="99.9% Solution" solution={solution99} />
	<Narigo>
		<p>I didn't get this to 100% using divs. I need to try it with gradients, I suppose!</p>
	</Narigo>
	<Puzzle title="100% Solution with gradients" {solution} />
	<Narigo>
		<p>
			...and here we are - done with gradients and even got to 100%, finally! There is probably a
			lot of potential to make this smaller, but I am happy to got to 100% at all.
    </p>
	</Narigo>
</PuzzlePageLayout>

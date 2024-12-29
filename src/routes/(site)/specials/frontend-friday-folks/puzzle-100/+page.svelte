<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solutionGradients99 = `<div y></div>
<div box></div>
<div box2></div>
<div bg>
<div sw r></div>
<div sw></div>
</div>
<style>
  & {
    background: #14313E;
  }
  div {
    position:fixed;
  }
  [r] {
    transform: scale(-1, 1) translate(7px);
  }
  [sw]{
    top:71;
      left:126;
      right:120;
    bottom:74;
    background:
    linear-gradient(-45deg, #14313E 8px, #0000 0) no-repeat,
    linear-gradient(45deg, #0000 106px, #FFDF00 0 114px, #0000 0) no-repeat,
    radial-gradient(1q, #FFDF00 6px, #0000 0) 65px 69px no-repeat,
    radial-gradient(1q, #FFDF00 7px, #0000 0) 70px 64px no-repeat,
    linear-gradient(-45deg, #14313E 14px, #0000 0) no-repeat,
    linear-gradient(45deg, #0000 100px, #FFDF00 0 120px, #0000 0) no-repeat,
    linear-gradient(45deg, #14313E 21px, #0000 0 101px, #14313E 0) 101% 101% / 85px 100px no-repeat,
    linear-gradient(135deg, #0000 50px, #FFDF00 0 70px, #14313E 0) 72px 70px / 85px 100px no-repeat,
    linear-gradient(45deg, #0000 85px, #14313E 0 95px, #FFDF00 0 125px, #14313E 0 135px,#0000 0) no-repeat
    ;
  }
    [bg]{
      top:70;
      bottom:70;
      left:103;
      right:103;
      background: #14313E;
    }
  [y]{
    top:130;
    left:53;
    width:294;
    height:40;
    border-radius: 5px;
    background:#ffdf00;
  }
  [box]{
    top:75;
    left:63;
    width:224;
    height:100;
    border: 25px solid #FFDF00;
    background:#FFDF00;
    border-radius: 20px;
  }
  [box2]{
    top:100;
    left:88;
    height:100;
    width:224;
    background:#14313E;
    border-radius: 10px;
  }
</style>`;

const solutionDivs99 = `<div class="inner-parens"></div>
<div class="sword-bg"></div>
<div class="sword">
  <div class="hilt"></div>
  <div class="crossguard"></div>
  <div class="blade"></div>
  <div class="tip"></div>
</div>
<div class="sword top">
  <div class="hilt"></div>
  <div class="crossguard"></div>
  <div class="blade"></div>
  <div class="tip"></div>
</div>

<style>
  &{
    background:#14313E;
  }
  .sword.top {
    transform: translate(-7px,2px) rotate(-90deg);
  }
  .sword {
    position: fixed;
    box-sizing: border-box;
    left:100;
    top:100;
    rotate:-45deg;
    display: flex;
    align-items:center;
    justify-content: center;
    transform: translate(-9q,-1px);
    & .hilt {
      background: #FFDF00;
      height: 20px;
      width: 40px;
      border-radius: 5px 0 0 5px;
    }
    & .crossguard {
      background: #FFDF00;
      height: 80px;
      width: 21q;
    }
    & .blade {
      background: #FFDF00;
      border-block: 11q solid #14313E;
      height: 30q;
      width: 145q;
    }
    & .tip {
      border: 15px solid #14313E;
      border-left-color: #FFDF00;
      border-right-width: 0;
    }
  }
  .sword-bg {
    position:fixed;
    inset:60px 103px;
    background:#14313E;
  }
  .inner-parens {
    position: fixed;
    inset:75px 63px;
    background: #FFDF00;
    border-radius: 20px;
    &:before,&:after{
      position:absolute;
      top:25;
      left:25;
      width:224;
      height:100;
      background:#14313E;
      border-radius:10px;
      content:'';
    }
    &:before{
      width:294;
      height:40px;
      left:-10px;
      top:55;
      background:#FFDF00;
      border-radius:5px;
    }
  }
</style>`
</script>

<PuzzlePageLayout title="CSSBattle">
	<Puzzle title="Solution" solution={solutionGradients99} />
	<Narigo>
		<p>
			We did this puzzle multiple times, because we only got 99.9% for it on the first try. This is
			the first try, mostly using gradients, but having the parenthesis on the sides with divs.
		</p>
	</Narigo>
	<Puzzle title="Solution" solution={solutionDivs99} />
	<Narigo>
		<p>
			The second try was using divs for the swords. Since rotating them lead to some strange spaces
			between the divs, I suspect this to be the main source of achieving even less match: 99.5%.
		</p>
	</Narigo>
</PuzzlePageLayout>

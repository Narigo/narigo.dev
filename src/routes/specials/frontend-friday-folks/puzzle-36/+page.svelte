<script>
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solutionFlex = `<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<style>
  body {
    background:#1A4341;
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 0;
  }
  .t {
    background: #998235;
    border-radius: 0 0 25px 25px;
  }
  .m {
    align-self: flex-end;
    background: #F3AC3C;
    border-radius: 25px 25px 0 0;
  }
  div {
    width: 50px;
    height: 200px;
    background: #dd6b4d;
  }
</style>`;

	const solutionGrid = `<div></div>
<div class="t"></div>
<div></div>
<div class="t"></div>
<div></div>
<div class="m"></div>
<div class="m"></div>
<div class="m"></div>
<style>
  body {
    background:#1A4341;
    display: grid;
    grid-template: repeat(3, 100px) / repeat(5, 50px);
    gap: 0 25px;
    margin: 0 25px;
  }
  .t,.m {
    grid-row: span 2;
  }
  .t {
    background: #998235;
    border-radius: 0 0 25px 25px;
  }
  .m {
    background: #F3AC3C;
    border-radius: 25px 25px 0 0;
  }
</style>`;

	const solutionAnimation = `<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<div class="t"></div>
<div class="m"></div>
<style>
  body {
    background: #1A4341;
    display: flex;
    gap: 0 25px;
    margin: 0 25px;
  }
  div {
    width: 50px;
    height: 100%;
    animation: 500ms 5s alternate ease-in-out infinite;
  }
  .t {
    background:
      radial-gradient(circle, #998235 25px, transparent 0),
      linear-gradient(#998235 175px, transparent 0)
    ;
    background-position: 0px 25px, 0px 0px;
    background-size: 100% 100%, 100% 200%;
    animation-name: sliding-t;
  }
  .m {
    background:
      radial-gradient(circle, #F3AC3C 25px, transparent 0),
      linear-gradient(to top, #F3AC3C 175px, transparent 0)
    ;
    background-position: 0px -25px, 0px 0px;
    animation-name: sliding-m;
  }
  @keyframes sliding-m {
    0% {
      background-position: 0 -25px, 0 0;
      background-size: 100% 100%, 100% 100%;
    }
    100% {
      background-position: 0 125px, 0 0;
      background-size: 100% 100%, 100% 450px;
    }
  }
  @keyframes sliding-t {
    0% {
      background-position: 0 25px, 0 0;
    }
    100% {
      background-position: 0 -125px, 0 -150px;
    }
  }
</style>`;
</script>

<PuzzlePageLayout>
	<Puzzle title="Puzzle 36 solution" solution={solutionFlex} />
	<Narigo>
		This is a straight forward solution using Flexbox. Even though you may see multiple rows, it's
		easier to think of it all as one row, where the stalactites and stalagmites are aligned
		differently.
	</Narigo>
	<Puzzle title="Puzzle 36 solution" solution={solutionGrid} />
	<Narigo
		>Since we first saw this as multiple rows, we wanted to try it as a grid as well. This solution
		uses multiple row spans to achieve the height effect.</Narigo
	>
	<Puzzle title="Puzzle 36 - animation" solution={solutionAnimation} />
	<Narigo>
		Ok, this one is a bit odd. I've added an animation to it, but I'm not yet sure why I can change
		the background-size for one easily to remove a weird "background comes back from the other side"
		effect.
	</Narigo>
	<Bubble side="right">
		Whenever I think of learning resources for Flexbox or Grid, I need to link to
		<a href="https://flexboxfroggy.com/" rel="external">Flexbox Froggy</a>
		and <a href="https://cssgridgarden.com/" rel="external">Grid Garden</a>.
	</Bubble>
</PuzzlePageLayout>

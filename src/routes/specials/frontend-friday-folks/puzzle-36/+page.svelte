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
	<Bubble side="right">
		Whenever I think of learning resources for Flexbox or Grid, I need to link to
		<a href="https://flexboxfroggy.com/" rel="external">Flexbox Froggy</a>
		and <a href="https://cssgridgarden.com/" rel="external">Grid Garden</a>.
	</Bubble>
</PuzzlePageLayout>

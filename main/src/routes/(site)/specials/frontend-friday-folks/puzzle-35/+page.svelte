<script>
	import Code from '$lib/common/Code.svelte';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div id="y"></div>
<div id="r"></div>
<style>
  body {
    background: #293462;
    display: grid;
    justify-items: center;
    place-content: center;
  }
  #y {
    width: 100px;
    height: 150px;
    background:
      radial-gradient(circle at 50% 50px, #FFF1C1 50px, transparent 0),
      radial-gradient(circle at 20% 130px, #FFF1C1 20px, transparent 0),
      radial-gradient(circle at 80% 130px, #FFF1C1 20px, transparent 0),
      linear-gradient(#293462 50px, #FFF1C1 0 130px, transparent 0),
      linear-gradient(90deg, transparent 20px, #FFF1C1 0 80px, transparent 0)
    ;
  }
  #r {
    width: 30%;
    height: 50px;
    background: linear-gradient(#A64942 10px, #FE5F55 0);
    border-radius: 0 0 10px 10px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Ice Cream" puzzleId="35">
	<Puzzle title="Puzzle 35 solution" {solution} />
	<Narigo
		><p>
			While we can do the popsicle and the stick with border radius, the presented solution shows
			another way, how to solve this. By using multiple backgrounds, stacked on top of each other,
			it's possible to create the same effect with gradients.
		</p>
		<p>
			The <Code>&lt;div id="r"&gt;</Code> shows the <Code>border-radius</Code> approach and the
			<Code>&lt;div id="y"&gt;</Code> is all about using gradients to draw.
		</p></Narigo
	>
	<Bubble side="right">
		MDN has a great <a
			href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"
			rel="external">explanation for using multiple backgrounds</a
		>.
	</Bubble>
</PuzzlePageLayout>

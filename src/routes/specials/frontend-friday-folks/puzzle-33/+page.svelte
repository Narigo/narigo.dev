<script>
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solutionGradients = `<div></div>
<style>
  body {
    background: #1A4341;
  }
  div {
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    inset: 50px 100px;
    background:
      radial-gradient(#0B2429 15px, transparent 0) -30px -30px,
      conic-gradient(#F3AC3C 90deg, transparent 0),
      radial-gradient(transparent 75px, #1A4341 0),
      conic-gradient(transparent 180deg, #998235 0);
  }`;

	const solutionImproved = `<div></div>
<style>
  body {
    background: #1A4341;
  }
  div {
    position: absolute;
    border-radius: 50%;
    inset: 50px 100px;
    background:
      radial-gradient(#0B2429 15px, transparent 0) -30px -30px,
      conic-gradient(#F3AC3C 90deg, #1A4341 0 180deg,transparent 0),
      radial-gradient(#998235 75px, #1A4341 0);
  }`;
</script>

<PuzzlePageLayout>
	<Puzzle title="Puzzle 33 solution" solution={solutionGradients} />
	<Narigo
		>This is the first puzzle where I used multiple backgrounds with gradients. It's not optimized
		yet, but the idea is clear.</Narigo
	>
	<Puzzle title="Puzzle 33 solution" solution={solutionImproved} />
	<Narigo
		>Here is an improved version by leveraging the fact that <code>inset</code> is already telling
		CSS how big the box is. <code>width</code> and
		<code>height</code> settings are therefore not necessary. The second improvement is how the gradients
		are applied: Instead of using four different, it can do it in three, using multiple color stops.
	</Narigo>
	<Bubble side="right">
		MDN has a great <a
			href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds"
			rel="external">explanation for using multiple backgrounds</a
		>.
	</Bubble>
</PuzzlePageLayout>

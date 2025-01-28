<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(circle, #F6DF96 25px, #781728 0 35px, transparent 0),
      linear-gradient(to right, #6CB3A9 110px, #781728 0 290px, #6CB3A9 0) 0 50% / 100% 20px no-repeat,
      radial-gradient(circle, transparent 100px, #6CB3A9 0),
      conic-gradient(#D25B70 25%, #FFFFFF 0 75%, #D25B70 0)
    ;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Pokeball" puzzleId="95">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			I've done this puzzle in the official CSSBattle Discord to help people understand how
			gradients work. I've tried not to code golf, but I've mentioned a couple of tricks they may
			see when people are using gradients in the top solutions.
		</p>
		<p>
			One of them being the <Code>0</Code> as the first number behind the colors, essentially meaning
			"directly at the latest color stop, start this". Or the <Code>&amp;</Code> sign in the beginning
			referencing the implicitly generated html tag.
		</p>
	</Narigo>
</PuzzlePageLayout>

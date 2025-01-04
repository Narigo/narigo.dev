<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div class="r"></div>
<style>
  body {
    background: #293462;
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0;
  }
  .r {
    transform: scaleX(-1);
  }
  div {
    background: 
      radial-gradient(circle at 0px 40px, #FE5F55 40px, #293462 0) 10px 0 / 50px 40px no-repeat,
      radial-gradient(circle at 30px 75px, #293462 15px, transparent 15px),
      radial-gradient(circle at 0px 140px, #293462 40px, #FE5F55 0) 10px 0 / 50px 140px no-repeat,
      linear-gradient(transparent 40px, #FE5F55 0 100px, #293462 0),
      linear-gradient(to right,#FE5F55 0 10px, transparent 0)
    ;
    height: 140px;
    width: 50px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Fox Head">
	<Puzzle title="Puzzle 41 solution" {solution} />
	<Narigo
		>The solution with gradients does not feel so great and it seems to be much easier using <code
			>border-radius</code
		>
		for what we have here. Still, it is possible to achieve the result with gradients and I'm happy I
		could make it - even if it take a lot longer than expected. One cool thing here is to mirror the
		face of the fox by using
		<Code>transform: scaleX(-1)</Code>. I wonder whether it's possible to the whole face with
		gradients though! 🤔</Narigo
	>
</PuzzlePageLayout>

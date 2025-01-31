<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="wrap">
  <div class="l"></div>
  <div class="r"></div>
</div>
<style>
  body {
    background: #6592CF;
    margin: 0;
  }
  .wrap {
    inset: 30px 145px 28px;
    overflow: hidden;
    position: absolute;
  }
  .l,.r {
    border: 30px solid #243D83;
    border-radius: 70px;
    right: 40px;
    position: absolute;
    height: 182px;
    width: 90%;
  }
  .r {
    left: 40px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Wrench" puzzleId="43">
	<Puzzle title="Puzzle 43 solution" {solution} />
	<Narigo
		>That was tricky! The numbers don't really line up well and it feels like there is something off
		now. Usually, the numbers end with a <Code>0</Code> or at least <Code>5</Code> when using
		<Code>px</Code> values. I didn't want to deep dive into using other units to see whether ther is
		something else suited better for this.
	</Narigo>
</PuzzlePageLayout>

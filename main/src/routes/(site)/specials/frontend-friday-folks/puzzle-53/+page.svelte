<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
<div id=c></div>
<div id=r></div>
</div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #19191A;
  }
  #c {
    isolation: isolate;
    background: conic-gradient(#4F77FF 50%, #9AD5FF 0 75%, #4F77FF 0);
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  #r {
    margin-top: -75px;
    width: 75px;
    height: 125px;
    background: #F9E492;
  }
</style>`;
</script>

<PuzzlePageLayout title="Pastel Logo" puzzleId="53">
	<Puzzle title="Puzzle 53 solution" {solution} />
	<Narigo>
		This is the first time I used <Code>isolation: isolate</Code>! From my understanding, it creates
		a new z-index stack and it allows me to put regular elements on top of each other, without
		having to <Code>position: absolute</Code> them. See
		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/isolation" rel="external"
			>MDN for more information about isolation</a
		>.
	</Narigo>
</PuzzlePageLayout>

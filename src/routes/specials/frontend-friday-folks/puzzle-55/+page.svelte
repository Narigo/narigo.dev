<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div></div>
<div></div>
<div></div>
<style>
  * {
    background: var(--c,#191919);
  }
  div {
    --c: #F9E492;
    position: absolute;
    border-radius: 0 0 50px 50px;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    rotate: calc(var(--r) * 90deg);
    transform-origin: 0 0;
  }
  div:nth-child(1) {
    --r: 1;
  }
  div:nth-child(2) {
    --r: 2;
  }
  div:nth-child(3) {
    --r: 3;
  }
  div:nth-child(odd) {
    --c: #4F77FF;
  }
</style>`;

	const solutionAnimation = `<div></div>
<div></div>
<div></div>
<div></div>
<style>
  * {
    background: var(--c,#191919);
  }
  body {
    animation: wind 3s infinite ease-in-out;
  }
  div {
    --c: #F9E492;
    position: absolute;
    border-radius: 0 0 50px 50px;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 50px;
    rotate: calc(var(--r) * 90deg);
    transform-origin: 0 0;
  }
  div:nth-child(1) {
    --r: 1;
  }
  div:nth-child(2) {
    --r: 2;
  }
  div:nth-child(3) {
    --r: 3;
  }
  div:nth-child(odd) {
    --c: #4F77FF;
  }
  @keyframes wind {
    0% { rotate: calc(0deg) }
    100% { rotate: calc(360deg) }
  }
</style>
`;
</script>

<PuzzlePageLayout title="Windmill">
	<Puzzle title="Puzzle 54 solution" {solution} />
	<Narigo>
		We figured out that using counters is not going to work here. Also using <code>attr()</code> doesn't
		work to not have to redundantly tell CSS which child it is.
	</Narigo>
	<Puzzle title="Puzzle 54 solution" solution={solutionAnimation} />
	<Narigo>
		...but since I couldn't get it to work with counters, at least I could add an animation 😵‍💫
	</Narigo>
</PuzzlePageLayout>

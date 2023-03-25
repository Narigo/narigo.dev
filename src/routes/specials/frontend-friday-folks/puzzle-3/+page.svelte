<script>
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solutionFirst = `<div class="bg-rect">
<div class="blue-circle"></div>
<div class="button"></div>
</div>
<style>
  body {
    margin: 0;
    background: #6592CF;
  }
  .bg-rect {
    position: absolute;
    top: 75px;
    bottom: 75px;
    left: 50px;
    right: 50px;
    background: #243D83;
    overflow: hidden;
  }
  .blue-circle {
    border: 50px solid #6592CF;
    border-radius: 50%;
    position: absolute;
    left: 25px;
    right: 25px;
    top: -50px;
    bottom: -50px;
  }
  .button {
    position: absolute;
    border-radius: 50%;
    background: #EEB850;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    translate: -50% -50%;
  }
</style>`;

	const solutionGradient = `<div></div>
<style>
  body {
    background: #6592CF;
    display: grid;
    place-items: center;
  }
  div {
    background: radial-gradient(#EEB850 25px, #243D83 0 75px, #6592CF 0 125px, #243D83 0) 0 50% / 300px 300px;
    height: 150px;
    width: 300px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Push Button">
	<Puzzle title="Puzzle 3 solution" solution={solutionFirst} />
	<Narigo
		>My first solution when we started playing these CSS battles. Instead of using two inner divs,
		this could have been done with <code>::before</code> and <code>::after</code> pseudo elements - but
		I didn't know them too well back then.</Narigo
	>
	<Puzzle title="Puzzle 3 solution" solution={solutionGradient} />
	<Narigo
		>Gradients! This has been done when the Saturday edition of the Frontend Friday Folks started
		over from the beginning. I joined this time and tried solving it again in a different way. Using
		a radial-gradient and moving the background position seemed to make sense to me.</Narigo
	>
</PuzzlePageLayout>

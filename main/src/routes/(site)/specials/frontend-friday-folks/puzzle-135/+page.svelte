<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div></div>
<div></div>
<div></div>
<style>
  body{display:grid;grid-template-columns:50% 50%;gap:20px 10px;margin:100 115;background:#E3516E}
  div {
    width: 75px;
    height: 40px;
    border-radius: 0 20px 20px;
    clip-path:polygon(4px 0, 44px 100%, 100% 100%,100% 0);
    background: #D9D9D9;
  }
  div+div{scale:-1 1}
  div+div+div{scale:1 -1}
  div+div+div+div{scale:-1 -1}`;
</script>

<PuzzlePageLayout title="Spikes" puzzleId="135">
	<Puzzle title="Spikes solution" {solution} />
	<Narigo>
		<p>A weird clip-path. I didn't use gradients and Meg beat me to it. Ouch!</p>
	</Narigo>
</PuzzlePageLayout>

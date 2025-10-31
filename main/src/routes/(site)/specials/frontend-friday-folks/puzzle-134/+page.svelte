<script>
	import { resolve } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<div></div>
<style>
  body{display:flex;place-items:center;justify-content:center;background:#62306D}
  div {
    width: 80px;
    height: 160px;
    background: #F7EC7D;
    border-radius: 80px 0 40px 0;
  } 
 div+div{scale:-1 1}`;
</script>

<PuzzlePageLayout title="Wig" puzzleId="134">
	<Puzzle title="Wig solution" {solution} />
	<Narigo>
		<p>
			This had to be done extremely fast as I almost missed FFF due to daylight savings time ending
			differently than in the US and I missed it last week. So I used a couple of minutes to do this
			and afterwards went on to puzzle 135.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>&{margin:42px 42px;background:#6592cf}
  div{
    border: 50px solid #060f55;
    border-bottom: 0;
    border-right: 0;
    height: 150px;
    border-radius:100px 0;
  }
</style>`;
</script>

<PuzzlePageLayout title="Elbow" puzzleId="137">
	<Puzzle title="Quick solution" {solution} />
	<Narigo>
		<p>
			Okay, I had to do it while I was at a hackathon, so I didn't invest much time into it. It's
			refreshing to have a pretty easy target sometimes and this felt like one.
		</p>
	</Narigo>
</PuzzlePageLayout>

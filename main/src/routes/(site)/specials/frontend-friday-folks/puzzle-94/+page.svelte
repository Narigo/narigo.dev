<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:radial-gradient(1q,#F3AC3C 21q,#0000 0+30q,#F3AC3C 0 42q,#0000 0 53q,#998235 0 63q,#0000 0 76q,#F3AC3C 0 85q,#0000 0 99q,#F3AC3C 0 106q,#0000 0)#0E2E2C`;
</script>

<PuzzlePageLayout title="Ripples">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This was quick, I tried golfing this time. Probably easier done with tools, but I didn't want
			to install unit-golf or similar things yet...
		</p>
	</Narigo>
</PuzzlePageLayout>

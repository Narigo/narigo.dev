<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
<style>&{background:conic-gradient(#D9D9D9 25%,#E3516E 0)550px/150%;div{width:120;border-radius:90px;border:75px solid#D9D9D9;transform:translate(175px)rotate(-45deg)`;
</script>

<PuzzlePageLayout title="Spotlight" puzzleId="145" {solution}>
	<Narigo>
		Using a div makes these pills or any kind of gradient that doesn't work on the direct x or y
		axis a lot easier.
	</Narigo>
</PuzzlePageLayout>

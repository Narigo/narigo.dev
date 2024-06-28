<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    display: grid;
    place-items: center;
    background: #D25B70;
  }
  div {
    position:fixed;
    inset:0;
    background:conic-gradient(#F6DF96 25%,#F7F3DA 0 75%,#6CB3A9 0) -15px;
    clip-path:
      polygon(150px 150px,102px 114px,138px 66px,186px 102px,234px 38px,298px 86px,250px 150px,250px 250px,150px 250px,150px 150px,250px 150px,186px 102px)
    ;
  }
</style>`;
</script>

<PuzzlePageLayout title="Pythagoras" {solution}>
	<Narigo>
		<p>
			This is the first time we did this in the JSCraftCamp Discord and we had Michi and Meg
			checking in with me. I should really do more marketing for it 😅
		</p>
		<p>
			Anyways - I'm sure everybody thought the solution would be three divs and a bit of rotations,
			right? But could you do it with a conic gradient and a clip-path? Check the solution of how we
			did it!
		</p>
	</Narigo>
</PuzzlePageLayout>

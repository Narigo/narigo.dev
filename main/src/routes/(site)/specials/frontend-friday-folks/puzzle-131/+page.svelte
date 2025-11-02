<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div l></div>
<div u></div>
<style>
  body{background:#E38F66}
  div {
    position:fixed;
    top:70;
    left:95;
    border-radius: 100px;
  }
  [l]{
    width: 0;
    height: 90;
    border: 15px solid #62306D;
    box-shadow:90px 0 0#62306D,180px 0 0#FFFBDA;
  }
  [u]{
    inset:0;
    background:
      radial-gradient(1q at 50%0,#3210 30px, #62306D 0 60px,#3210 0) 95px 170px / 120px 60px no-repeat,
      radial-gradient(1q at 50%0,#3210 30px, #FFFBDA 0 60px,#3210 0) 185px 170px / 120px 60px no-repeat;
  }
</style>`;
</script>

<PuzzlePageLayout title="Letter W" puzzleId="131">
	<Puzzle title="Letter W solution" {solution} />
	<Narigo>
		<p>
			Had to be quick today! The u shapes could probably be made as shadows as well, but I couldn't
			figure it out to 100%, so I switched to radial gradients.
		</p>
	</Narigo>
</PuzzlePageLayout>

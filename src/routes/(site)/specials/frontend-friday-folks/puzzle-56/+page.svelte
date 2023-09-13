<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class=skull>
  <div class=top></div>
  <div class=bottom></div>
</div>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  .skull {
    display: grid;
    place-items: center;
  }
  .skull>* {
    background: #4F77FF;
    height: 100px;
    width: 120px;
  }
  .top {
    border-radius: 60px 60px 10px 10px;
    background:
      radial-gradient(circle at 35px 73px, #191919 20px, #0000 0),
      radial-gradient(circle at 85px 73px, #191919 20px, #0000 0),
      radial-gradient(circle at 60px 101px, #191919 10px, #0000 0),
      #4F77FF
    ;
  }
  .bottom {
    width: 80px;
    height: 30px;
    border-radius: 0 0 20px 20px;
    background:
      linear-gradient(90deg, #191919 10px, #0000 0 15px, #191919 0 25px, #0000 0 30px, #191919 0) 20px 25px / 40px 5px no-repeat,
      radial-gradient(circle at 40px 1px, #191919 10px, #0000 0),
      radial-gradient(circle at 25px 25px, #191919 5px, #0000 0),
      radial-gradient(circle at 40px 25px, #191919 5px, #0000 0),
      radial-gradient(circle at 55px 25px, #191919 5px, #0000 0),
      #4F77FF
    ;
  }
</style>`;
</script>

<PuzzlePageLayout title="Skull">
	<Puzzle title="Puzzle 56 solution" {solution} />
	<Narigo
		>That was "fun" using gradients for the teeth and nose. The linear-gradient creates the long
		parts of the teeth, using the background color and a transparent one in between. The background
		size and origin start it at the appropriate pixels. The radial-gradients sit on top of these
		teeth to create the rounded part of the teeth. The nose had to be split up and needed to be
		included in both parts: The upper skull and the jar.</Narigo
	>
</PuzzlePageLayout>

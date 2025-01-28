<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div f></div>
<style>
  [f] {
    width: 30px;
    height: 50px;
    background: #F3AC3C;
    border-radius: 60px 0;
    position:fixed;
    top:60;
    left:200;
  }
  body{
    background:
      radial-gradient(ellipse 60px 30px,#14313E 30px,#0000 0) 50% -35px no-repeat,
      radial-gradient(ellipse 80px 30px,#F3695A 40px,#0000 0) 50% -25px no-repeat,
      radial-gradient(ellipse 80px 30px,#BA3E46 40px,#0000 0) 50% 75px no-repeat,
      linear-gradient(#BA3E46,#BA3E46) 50% 127px / 80px 100px no-repeat,
      #14313E;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Candle" puzzleId="98">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			The flame was definitely easier to do with border radius. I think this is something I
			shouldn't even try with gradients anymore... 😅
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div l></div>
<div r></div>
<div b></div>
<style>
  body{
    background:#AC474B;
  }
  *{position:fixed;}
  [l],[r] {
    top: 42;
    left: 157;
    position:absolute;
    width: 21;
    height: 20;
    border: 10px solid #fff;
    border-radius: 20px 20px 0;
    background: #AC474B;
  }
  [r] {
    left:187;
    border-radius: 20px 20px 20px 0;
  }
  [b] {
    top: 110;
    left: 130;
    width: 20;
    height: 20;
    border: 64q solid;
    border-image: linear-gradient(#fff,#fff);
    background: #AC474B;
  }
</style>`;
</script>

<PuzzlePageLayout title="Gift Box">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			I've used border-image for the first time, to get the four parts of the box. The loop at the
			top are two divs with an appropriate border-radius. Since we did the Snowman, Candle and this
			one in one session, I couldn't finish it with 100% in the beginning. I did change it a couple
			of days later and got to 100% with the above solution though, keeping the initial ideas.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r>
  <div l></div>
  <p></p>
  <div r></div>
</r>
<style>
  body {
    background:#191919;
    display: grid;
    place-items:center;
  }
  r {
    width:242px;
    height:166px;
    position:relative;
  }
  p{
    position:absolute;
    background: #E08027;
    bottom:5px;
    left:95px;
    rotate:45deg;
    height:50px;
    width:50px;
  }
  div {
    position:absolute;
    box-sizing:border-box;
    width: 134px;
    height: 134px;
    background:
      radial-gradient(#191919 45px, #E08027 0),
      #dd6b4d;
    border:10px solid #191919;
    border-radius: 0 50% 50%;
  }
  div::after {
    content: '';
    position:absolute;
    inset: 48px 41px;
    height: 10px;
    width: 12px;
    border: 10px solid #E08027;
    border-radius:50%;
    border-top-color: #0000;
    border-left-color: #0000;
    rotate:225deg
  }
  [r]{
    right:0;
    transform:scale(-1, 1);
  }
</style>`;
</script>

<PuzzlePageLayout title="PushOwl">
	<Puzzle title="Puzzle 69 solution" {solution} />
	<Narigo>
		I missed doing this puzzle with VirtualCoffee, so I had to do this on my own. After lots of
		tinkering with the pixel values, I got a 100% solution. I have to admit I don't like having
		pixel values like this. There is probably a better way to solve this!
	</Narigo>
</PuzzlePageLayout>

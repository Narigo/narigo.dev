<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    display: grid;
    background:#000000;
    place-items:center;
  }
  div {
    background: #37385A;
    border-radius: 20px;
    box-sizing: border-box;
    width: 240px;
    height: 120px;
    position:relative;
  }
  div::after {
    position: absolute;
    top:21q;
    left:21q;
    width:212q;
    height:85q;
    content: '';
    border-radius: 10px;
    background: 
      linear-gradient(to right,#0000 10px, #000 0 20px,#0000 0 30px, #000 0 40px,#0000 0 50px, #000 0 60px,#0000 0 70px, #000 0 80px,#0000 0) 55px 20q / 100px 45q no-repeat,
      radial-gradient(1q at 70px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 90px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 110px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 130px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 70px 64q,#000 5q,#0000 0),
      radial-gradient(1q at 90px 64q,#000 5q,#0000 0),
      radial-gradient(1q at 110px 64q,#000 5q,#0000 0),
      radial-gradient(1q at 130px 64q,#000 5q,#0000 0),
      radial-gradient(1q at 180px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 180px 40px,#000 5q,#0000 0),
      radial-gradient(1q at 180px 60px,#000 5q,#0000 0),
      radial-gradient(1q at 20px 20px,#000 5q,#0000 0),
      radial-gradient(1q at 20px 40px,#000 5q,#0000 0),
      radial-gradient(1q at 20px 60px,#000 5q,#0000 0),
    linear-gradient(105deg,#9897AE 87q,#C0C3DB 0 140q,#9897AE 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Amegakure" puzzleId="104">
	<Puzzle title="100% Solution" {solution} />
	<Narigo>
		<p>
			This time, there was only Meg and me and since Meg didn't have time, we decided to make it a
			challenge: Use a timer and see how long I take. I've solved it to 99.9% in a little over 15
			minutes but getting it to 100% took until the timer was at 30 minutes 33 seconds. Oof!
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div f>
<div h>
  <div e l></div>
  <div e r></div>
</div>
<div ts><p><p><p></div>
</div>
<style>
  body{
    background:#000;
    display:grid;
    place-content:center;
  }
  [e] {
    background:#000;
    position:absolute;
    top:80;
    left:29;
    border-radius:50%;
    rotate:150deg;
    height:39;
    width:50;
  }
  [l] {
    left:90;
    rotate:30deg;
  }
  [f] {
    position:relative;
    &:after,
    &:before{
      z-index:-1;
      position:absolute;
      left:-22;top:23;
      content:'';
      background:
        radial-gradient(1q at 14q 26q,#fff 13q,#0000),
        radial-gradient(1q at 26q 14q,#fff 13q,#0000),
        linear-gradient(45deg,#000 27q,#0000 0 48q,#000 0),
        linear-gradient(135deg,#000 25q,#fff 0 56q,#000 0),
        #000
      ;
      height:50;
      width:50;
      -webkit-box-reflect:right 120q;
    }
    &:after {
      left:-22;top:126;
      rotate:270deg;
      -webkit-box-reflect:below 120q;
    }
  }
  [h] {
    margin-top:40;
    background:#fff;
    border:10px solid #000;
    border-radius:60px;
    height:100;
    width:150;
  }
  [ts] {
    display:flex;
    justify-content:center;
    gap:5px;
    >p{background:#fff;margin:0;width:15;height:20}
  }
</style>`;

	const solutionGradients = `<div f>
<div h>
  <div e l></div>
  <div e r></div>
</div>
<div ts></div>
</div>
<style>
  body{
    background:#000;
    display:grid;
    place-content:center;
  }
  [e] {
    background:#000;
    position:absolute;
    top:80;
    left:29;
    border-radius:50%;
    rotate:150deg;
    height:39;
    width:50;
  }
  [l] {
    left:90;
    rotate:30deg;
  }
  [f] {
    position:relative;
    &:after,
    &:before{
      z-index:-1;
      position:absolute;
      left:-22;top:23;
      content:'';
      background:
        radial-gradient(1q at 14q 136q,#fff 13q,#0000),
        radial-gradient(1q at 26q 148q,#fff 13q,#0000),
        linear-gradient(135deg,#000 32px,#0000 0 52px,#000 0)0 100q / 80px 80px no-repeat,
        linear-gradient(45deg, #000 37px,#fff  0 67px,#000 0)0 100q / 80px 80px no-repeat,
        radial-gradient(1q at 199q 14q,#fff 13q,#0000),
        radial-gradient(1q at 211q 26q,#fff 13q,#0000),
        linear-gradient(135deg,#000 25px,#0000 0 45px,#000 0)164q 10q / 80px 80px no-repeat,
        linear-gradient(45deg, #000 52px,#fff  0 75px,#000 0)164q 10q / 80px 80px no-repeat,
        radial-gradient(1q at 199q 148q,#fff 13q,#0000),
        radial-gradient(1q at 211q 136q,#fff 13q,#0000),
        linear-gradient(45deg, #000 46px,#0000 0 66px,#000 0)164q 100q / 80px 80px no-repeat,
        linear-gradient(135deg,#000 31px,#fff  0 61px,#000 0)164q 100q / 80px 80px no-repeat,
        radial-gradient(1q at 14q 26q,#fff 13q,#0000),
        radial-gradient(1q at 26q 14q,#fff 13q,#0000),
        linear-gradient(45deg, #000 46px,#0000 0 66px,#000 0)0 0 / 80px 80px no-repeat,
        linear-gradient(135deg,#000 32px,#fff  0 52px,#000 0)0 0 / 80px 80px no-repeat,
        #000
      ;
      height:300px;
      width:300px;
    }
  }
  [h] {
    margin-top:40;
    background:#fff;
    border:10px solid #000;
    border-radius:60px;
    height:100;
    width:150;
  }
  [ts] {
    margin-left:57;
    height:20;
    width:57;
    background:linear-gradient(90deg,#fff 15px,#000 0 20px,#fff 0 35px,#000 0 40px,#fff 0 55px,#000 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="One Piece">
	<Puzzle title="99.9% Solution" {solution} />
	<Narigo>
		<p>
			I didn't attend this time due to the B4Y3RW4LD Hackathon. Micha hosted this time and I didn't
			manage to get this done to 100% within an hour later. Let's see whether I can fix it some
			other point in time.
		</p>
	</Narigo>
	<Puzzle title="99.9% Gradient solution" solution={solutionGradients} />
	<Narigo>
		<p>Another solution, this time with gradients only. Didn't make it to 100% as well.</p>
	</Narigo>
	<Narigo>
		<p>
			I got a tip from Tsaeko in the official Discord: "the only issue for me was a border-radius
			with a 4/5 ratio for the eyes (4in/5in or 20px/25px) with 62° or 63° rotation". I could make
			the eyes look better, but still only 99.9%. Probably the bones on the sides are missing
			something. I need to try it again at some point...!
		</p>
	</Narigo>
</PuzzlePageLayout>

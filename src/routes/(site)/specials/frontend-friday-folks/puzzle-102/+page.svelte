<script>
	import { base } from '$app/paths';
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
</PuzzlePageLayout>

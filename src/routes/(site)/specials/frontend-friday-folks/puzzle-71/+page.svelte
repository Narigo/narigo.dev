<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class=head>
<div class=teeth></div>
<div class=nose></div>
<div class="ear l"></div>
<div class="ear r"></div>
<div class=face></div>
</div>
<style>
  body {
    display: grid;
    place-items:center;
    background:#998235;
  }
  .head {
    position:relative;
  }
  .nose {
    position: absolute;
    bottom:-99;
    border-radius:20px;
    left:70;
    top:120;
    width:40;
    background:#0B2429;
  }
  .teeth {
    content:'';
    position:absolute;
    border-radius: 50%;
    border: 20px solid #fff;
    border-top-color: #0000;
    border-left-color: #0000;
    rotate:225deg;
    top:130;
    left:30;
    height:80;
    width:80;
  }
  .face,.ear {
    border-radius: 50%;
    width: 180px;
    height: 180px;
    background: #1A4341;
  }
  .face {
    background:
      linear-gradient(#1A4341 50%, #0000 0),
      radial-gradient(circle at 60px 50%, #0B2429 10px, #998235 0 20px, #0000 0),
      radial-gradient(circle at 120px 50%, #0B2429 10px, #998235 0 20px, #0000 0),
      #1A4341;
  }
  .ear {
    position:absolute;
    background:#1A4341;
    content:'';
    overflow:hidden;
    width: 80px;
    z-index:-1;
  }
  .ear::before {
    position: absolute;
    background: #0B2429;
    border-radius: 50%;
    content: '';
    height: 100%;
    width: 100%;
  }
  .ear.l {
    left:-60px;
  }
  .ear.l::before {
    left:15px;
  }
  .ear.r::before {
    right:16px;
  }
  .ear.r {
    right:-60px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Elephant">
	<Puzzle title="Puzzle 71 solution" {solution} />
	<Narigo>
		I couldn't make it this week. Thanks to David, it still happened and a <a
			href="https://github.com/orgs/Virtual-Coffee/discussions/1043"
			rel="external">solution for this puzzle</a
		> has been posted. I only got 99.9% this time.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div c></div>
<div class="ellipse white"></div>
<div class="ellipse green"></div>
<div class="ellipse orange"></div>
<style>
  body {
    background: #0D1335;
  }
  [c] {
    background: #73C6EA;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    position: absolute;
    inset: 130px 180px;
  }
  .ellipse {
    border-radius: 100%;
    height: 90px;
    width: 230px;
    background: #1230;
    position: absolute;
    inset: 95px 75px;
  }
  .white {
    border: 10px solid #FBFAE2;
  }
  .green {
    border: 10px solid #4FA07B;
    rotate: 120deg;
  }
  .orange {
    border: 10px solid #DC6638;
    rotate: 60deg;
  }
</style>`;
</script>
m
<PuzzlePageLayout title="React India">
	<Puzzle title="Puzzle 167 solution" {solution} />
	<Narigo
		>An in-person session we did at the <a href="https://www.bayerwald-hackathon.de/" rel="external"
			>B4Y3RW4LD Hackathon</a
		>. I didn't manage to use radial gradients live, as the ellipse won't have the same sizes
		everywhere on the sides. I think you can approximate by doing multiple radial gradients with
		different sizes, but the rotation is something I didn't know how to do as well...</Narigo
	>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body{display:grid;place-items:center;background:#191919}
  div {
    width: 290;
    height: 120;
    background:
      radial-gradient(ellipse,#FE5F55 25px,#0000 0) 185px 60px / 100px 80px no-repeat,
      radial-gradient(ellipse,#A64942 25px,#0000 0) 115px 60px / 100px 80px no-repeat,
      radial-gradient(ellipse,#FE5F55 25px,#0000 0) 45px 60px / 100px 80px no-repeat,
      radial-gradient(ellipse,#FE5F55 25px,#0000 0) -25px 60px / 100px 80px no-repeat,
      linear-gradient(to right,#0000 40px,#FE5F55 0 120px,#0000 0 180px,#A64942 0 220px,#0000 0 250px,#FE5F55 0 290px,#0000 0) 100% -110px no-repeat,
      linear-gradient(to right,#0000 40px,#FE5F55 0 50px,#0000 0 110px,#FE5F55 0 120px,#0000 0 180px,#A64942 0 190px,#0000 0 250px,#FE5F55 0 260px,#0000 0) 100% -20px no-repeat,
      linear-gradient(#0000 10px,#191919 0 20px,#0000 0),
      linear-gradient(to right,#0000 260px,#FE5F55 0 290px,#0000 0) 100% -90px no-repeat;
  }
</style>`;

	const solution2 = `<div></div><style>body{display:grid;place-items:center;background:#191919}div{width:290;height:120;--x:radial-gradient(ellipse,#FE5F55 25px,#0000 0) no-repeat;background:var(--x)185px 60px/100px 80px,radial-gradient(ellipse,#A64942 25px,#0000 0)no-repeat 115px 60px/100px 80px,var(--x)45px 60px/100px 80px,var(--x)-25px 60px/100px 80px,linear-gradient(to right,#0000 40px,#FE5F55 0 120px,#0000 0 180px,#A64942 0 220px,#0000 0 250px,#FE5F55 0 290px,#0000 0)100%-110px no-repeat,linear-gradient(to right,#0000 40px,#FE5F55 0 50px,#0000 0 110px,#FE5F55 0 120px,#0000 0 180px,#A64942 0 190px,#0000 0 250px,#FE5F55 0 260px,#0000 0)100%-20px no-repeat,linear-gradient(#0000 10px,#191919 0 20px,#0000 0),linear-gradient(to right,#0000 260px,#FE5F55 0 290px,#0000 0)100% -90px no-repeat`;
</script>

<PuzzlePageLayout title="Notes">
	<Puzzle title="Puzzle 77 solution" {solution} />
	<Narigo>Playing around with background sizes and positions in gradients here.</Narigo>

	<Puzzle title="Puzzle 77 solution small" solution={solution2} />
	<Narigo>...and a bit of code-golf to get less characters.</Narigo>
</PuzzlePageLayout>

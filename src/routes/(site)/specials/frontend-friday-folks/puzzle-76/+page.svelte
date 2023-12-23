<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r>
<div w></div>
<div b></div>
</r>
<style>
  body{display:grid;place-items:center;background:#998235}
  div {
    width:150;
    height:75;
    border-radius:40px
  }
  [w]{
    background:
      linear-gradient(#0000 50%,#fff 0),
      radial-gradient(circle at 25% 50%,#fff 38px,#0000 0),
      radial-gradient(circle at 75% 50%,#fff 38px,#0000 0)
  }
  [b]{
    background:
      linear-gradient(to right,#191919 25px,#0000 0 35px,#191919 0 60px,#0000 0 70px,#191919 0 95px,#0000 0),
      radial-gradient(circle at 122px 28px,#191919 7.5px,#EFF33C 0)
  }
</style>
`;
</script>

<PuzzlePageLayout title="Beeee">
	<Puzzle title="Puzzle 76 solution" {solution} />
	<Narigo>Gradients again! They are so beautiful...!</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<article>
  <div></div>
</article>
<article r>
  <div></div>
</article>
<style>
body{
  background: #4F77FF;
  margin: 70+80
}
  article {
    border: 20px solid #fff;
    border-radius: 10px;
    border-right-color: #3210;
    width:200;
    height:50
  }
  div {
    margin:-20;
    width: 190;
    border-radius: 10px;
    border: 25px solid #fff;
    box-shadow: 20px -20px #1038BF
  }
  [r] {
    transform: translateY(-20px) rotate(180deg);
  }
</style>`;
</script>

<PuzzlePageLayout title="Letter S" puzzleId="132">
	<Puzzle title="Letter S solution" {solution} />
	<Narigo>
		<p>The solution for me is doing one part and then clone and rotate it.</p>
	</Narigo>
</PuzzlePageLayout>

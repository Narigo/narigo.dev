<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="w">
  <div class="fs">
    <div class="h f f1"></div>
    <div class="h f f2"></div>
    <div class="h f f3"></div>
    <div class="h f f4"></div>
  </div>
  <div class="h x palm"></div>
  <div class="h x arm"></div>
  <div class="h f thumb"></div>
</div>
<style>
  body {
    background: #F9E492;
    display: grid;
    place-items: center;
    margin: 0;
  }
  .w {
    display: grid;
    position: relative;
    grid-template-columns: repeat(4, 1fr);
    margin-top: -10px;
  }
  .fs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column: 1 / 5;
    height: 70px;
    place-items: end;
  }
  .h {
    background: #191919;
  }
  .f {
    box-sizing: border-box;
    border-radius: 20px;
    border: 5px solid #F9E492;
    margin-right: -5px;
    height: 45px;
    width: 30px;
  }
  .f1 {
    height: 55px;
  }
  .f2 {
    height: 65px;
  }
  .f3 {
    height: 55px;
  }
  .x {
    border-radius: 0 0 10px 10px;
  }
  .palm {
    grid-column: 1 / 5;
    height: 40px;
  }
  .arm {
    grid-column: 2 / 4;
    height: 45px;
  }
  .thumb {
    position: absolute;
    height: 75px;
    transform: translate(2px, 36.5px) rotate(60deg);
  }
</style>`;
</script>

<PuzzlePageLayout title="Black Lives Matter">
	<Puzzle title="Puzzle 54 solution" {solution} />
	<Narigo>
		It was interesting to use grid here. The solution needed multiple wrappers, to get it done, but
		there may be some possibilties to optimize it. No real code golf ideas to make the solution
		smaller, but we got to 100% with this. So for us, 100% is "good enough". 😅
	</Narigo>
</PuzzlePageLayout>

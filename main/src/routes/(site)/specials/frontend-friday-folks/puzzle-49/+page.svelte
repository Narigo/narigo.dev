<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="house roof"></div>
<div class="house main">
  <div class="feature window"></div>
  <div class="feature door"></div>
</div>
<style>
  body{
    background:#6592CF;
    display:grid;
    place-content:center;
    place-items:center;
  }
  .house {
    &.roof {
      border:100px solid transparent;
      border-top:0;
      border-bottom-color:#243D83;
    }
    &.main {
      background:#243D83;
      border-radius: 0 0 10px 10px;
      height:100;
      width:150;
      display:grid;
      justify-content:center;
      align-content: space-between;
      justify-items:center;
      & .feature {
        background:#EEB850;
        &.window {
          height: 10px;
          width: 100;
          border-radius: 10px;
          margin-top:-5px;
        }
        &.door {
          height: 50;
          width: 50;
          border-radius: 10px 10px 0 0;
        }
      }
    }
  }
</style>
`;
</script>

<PuzzlePageLayout title="Stay at Home" puzzleId="49">
	<Puzzle title="Puzzle 49 solution" {solution} />
	<Narigo>
		Another puzzle I think we haven't done during VirtualCoffee. I've solved it by myself with
		regular elements and in a way that could work as a component.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
  <div p></div>
  <div p b></div>
  <div r></div>
</div>
<style>
  body {
    background: #243D83;
    display: grid;
    place-content: center;
  }
  div {
    position:relative;
    &>div{
      translate: -50% -50%;
      rotate:45deg;
    }
  }
  [r] {
    width:120;
    height:120;
    position:absolute;
    background:radial-gradient(#EEB850 30px,#243D83 0);
  }
  [p] {
    position:absolute;
    width: 220px;
    height: 100px;
    background: #6592CF;
    border-radius: 50px;
  }
  [b] {
    rotate:-45deg;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Supernova" {solution} puzzleId="83">
	<Narigo>
		This time, I learnt from Derek that you can use nested CSS already! So cool to see this in
		action!
	</Narigo>
</PuzzlePageLayout>

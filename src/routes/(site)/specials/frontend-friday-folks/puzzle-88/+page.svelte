<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution1 = `<div></div>
<div b></div>
<style>
  &{background:#D25B70}
  div {
    position:fixed;
    inset: 0 0 calc(50% + 20px);
    background:#F7F3DA;
  }
  div:before,div:after {
    content:'';
    position:absolute;
    width:50%;
    height:40px;
  }
  div:before{
    bottom:-20;
    border-radius:0 10px;
    background:#D25B70;
  }
  div:after{
    bottom:-20;
    right:0;
    border-radius:0 0 0 20px;
    background:#F7F3DA;
  }
  [b]{
    transform-origin:50% calc(100% + 20px);
    rotate:180deg;
  }
</style>`;
	const solution2 = `<div></div>
<div b></div>
<style>
  &{background:#F7F3DA}
  div {
    position:fixed;
    inset: 110px 50% 0 0;
    border-radius: 0 10px;
    background:#D25B70;
  }
  div:before {
    content:'';
    position:absolute;
    inset:40px 0 -20px 0;
    border-radius:0 20px;
    background:#F7F3DA;
  }
  [b]{
    transform-origin:100% 40px;
    rotate:180deg;
  }
</style>`;
</script>

<PuzzlePageLayout title="Tight Corner">
	<Puzzle title="First solution" solution={solution1} />
	<Narigo>
		The first idea we had - I wanted to finish it, even though B Suraj came in and had the fantastic
		idea to create it in a different way by stacking two divs on top of each other. So this solution
		is basically using pseudo elements to make use of the full width and go a bit over the end of
		the div.
	</Narigo>

  <Puzzle title="Second solution" solution={solution2} />
	<Narigo>
		As mentioned above, the second one was a cleaner version based on the idea that B Suraj had. I
		think this could be used to make a fun animation as well...! 🤔
	</Narigo>
</PuzzlePageLayout>

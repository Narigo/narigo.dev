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

	const teeth = `<x>
<r>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</r>
</x>
<style>
  body{background:#4c4;margin:0;display:grid;place-items:center}
  x{animation:lip 1s infinite alternate;display:grid;height:80px;width:100%;overflow:hidden;place-items:center;align-content:center}
  r{display:flex;justify-content:center;align-items:center;height:80px;width:100%;overflow:hidden;background:linear-gradient(#F7F3DA 10px,#d25b70 0 calc(100% - 10px),#F7F3DA 0)}
  div {
    flex-grow:1;
    position:relative;
    border-radius:10px;
    background:#d25b70;
    height:100%;
  }
  div:before {
    inset:50% 0 -20px;
    content:'';
    position:absolute;
    border-radius:20px;
    background:#F7F3DA;
    animation: teeth 1s infinite alternate;
  }
  div:nth-child(even){
    transform-origin:50% 50%;
    rotate:180deg;
  }
  @keyframes lip {
    from {
      height:80px;
    }
    to {
      height:0px;
    }
  }
  @keyframes teeth {
    from {
      inset:50% 0 -20px;
    }
    to {
      inset:30% 0 -20px;
    }
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

	<Puzzle title="Teeth" solution={teeth} />
	<Narigo>
		Well, here is an animation that came to my mind when working on the solution for the puzzle. I
		guess this should go into some kind of animal. 😅
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="pacman"></div>
<div class="dots"></div>
<div class="ghost"></div>
<style>
  body {
    background: #000;
    display: grid;
    place-items: center;
  }
  .ghost {
    height: 60px;
    width: 60px;
    position: fixed;
    right: 60px;
    border-radius: 50% 50% 0 0;
    clip-path: shape(from 100% 100%, line to 100% 0, line to 0 0, line to 0 60px,line to 10px 50px,line to 20px 60px,line to 30px 50px,line to 40px 60px,line to 50px 50px);
    background: #C74E4E;
  }
  .dots {
    height: 10px;
    width: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: -30px 0 0 #fff,30px 0 0 #fff;
  }
  .pacman {
    width: 70px;
    height: 70px;
    position: fixed;
    left: 55px;
    background:
      radial-gradient(transparent 30px, #000 0),
      conic-gradient(#E0E246 45deg, #000 0 135deg, #E0E246 0);
  }
</style>`;
</script>

<PuzzlePageLayout title="Pacman" puzzleId="119">
	<Puzzle title="Pacman" {solution} />
	<Narigo>
		<p>
			This was done during the CSS Battle session at the JSCraftCamp 2025. I learned about the new <Code
				>shape()</Code
			> function, which allows for more complex clipping paths and shapes in CSS.
		</p>
	</Narigo>
</PuzzlePageLayout>

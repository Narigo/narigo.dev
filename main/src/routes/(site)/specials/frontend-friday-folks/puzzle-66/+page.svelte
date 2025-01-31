<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(#191919 10px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0),
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`;

	const solutionBackgroundPosition = `<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      linear-gradient(to right,#191919 30px, #F2AD43 0 50px, #191919 0) 0 10px no-repeat,
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`;

	const solutionBackgroundSize = `<div></div>
<style>
  body {background: #191919;display:grid;place-items:center}
  div {
    width: 250px;
    height: 100px;
    position:relative;
    background:
      radial-gradient(circle at 66px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 185px 160px, #191919 100px, #0000 0),
      radial-gradient(circle at 100% 50px, #191919 50px, #0000 0),
      radial-gradient(circle at 0px 50px, #191919 50px, #0000 0),
      #F2AD43;
  }
  div::before {
    position:absolute;
    inset: 0 85px 70px;
    content: '';
    background: 
      radial-gradient(circle at 30px 10px, #F2AD43 5px, #0000 0),
      radial-gradient(circle at 50px 10px, #F2AD43 5px, #0000 0),
      conic-gradient(#F2AD43,#F2AD43) 30px 10px / 20px 20px no-repeat,
      #191919;
    border-radius: 0 0 10px 10px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Batmicky" puzzleId="66">
	<Puzzle title="Puzzle 66 solution" {solution} />
	<Narigo>Again, having lots of fun with gradients!</Narigo>
	<Puzzle title="Puzzle 66 solution" solution={solutionBackgroundPosition} />
	<Narigo>
		There is a minor improvement with this, by moving the background position down by <code
			>10px</code
		>
		using
		<code>no-repeat</code>.
	</Narigo>
	<Puzzle title="Puzzle 66 solution" solution={solutionBackgroundSize} />
	<Narigo>
		If using background size, it will let us save a few more characters. Still, it needs some kind
		of gradient to create an image first that can be set with background size.
		<code>conic-gradient</code> saves another char vs radial and linear. The <code>no-repeat</code> is
		still necessary, to ensure the square won't fill the whole background again by repeating itself.
	</Narigo>
</PuzzlePageLayout>

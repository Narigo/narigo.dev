<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const gradientMirrorSolution = `<div o>
<div a></div>
<div b></div>
<div c></div>
</div>
<style>
  body {
    background: #6592CF;
  }
  [o]{
    -webkit-box-reflect:right;
    width: 50%;
  }
  [a],[b],[c] {
    position: absolute;
    top:50%;
    right:50%;
    background: linear-gradient(38.5deg, #0000 78px, #293D7E 0 102px, #0000 0);
    height: 100px;
    width: 125px;
  }
  [b]{
    top:100px;
  }
  [c]{
    top:50px;
  }
</style>
`;

	const triangleSolution = `<div a></div>
<div b></div>
<div c></div>
<div d></div>
<div e></div>
<div f></div>
<style>
  body {
    background: #6592CF;
    display: grid;
    place-items: center;
    margin-top:146px;
  }
  div {
    border-left: 125px solid #0000;
    border-right: 125px solid #0000;
    border-top: 100px solid var(--c,#293D7E);
    margin-top: var(--t,0);
    width: 0;
  }
  [b] {--t:-175px;--c:#6592CF}
  [c] {--t:-230px}
  [d] {--t:-306px;--c:#6592CF}
  [e] {--t:-360px}
  [f] {--t:-440px;--c:#6592CF}
</style>
`;
</script>

<PuzzlePageLayout title="Chevron" puzzleId="112">
	<Puzzle title="Gradient Mirror Solution" solution={gradientMirrorSolution} />
	<Narigo>
		<p>
			I had multiple, different solutions to this puzzle. One of them was using a <Code
				>linear-gradient</Code
			> in three elements and a <Code>-webkit-box-reflect</Code> to mirror them to the right.
		</p>
	</Narigo>

	<Puzzle title="Triangles Solution" solution={triangleSolution} />
	<Narigo>
		<p>
			This idea used a set of 6 triangles. Basically three borders set transparent and one being
			drawn out, to create a triangle and then stacked those on top of each other.
		</p>
	</Narigo>
</PuzzlePageLayout>

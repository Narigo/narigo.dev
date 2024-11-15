<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r><r><style>*+*{display:grid;place-items:center}r{position:fixed;rotate:45deg;width:50;height:200;background:#A3A368}r>r{rotate:90deg;background:#F3AC3C;mix-blend-mode:screen`;
	const solution2 = `<r><r><style>*+*,r{display:grid;place-items:center}r{rotate:45deg;width:50;height:200;background:#A3A368;mix-blend-mode:screen}r>r{rotate:90deg;background:#F3AC3C`;
</script>

<PuzzlePageLayout title="Band-aid">
	<Puzzle title="Puzzle 32 solution" {solution} />
	<Narigo>
		I saw the Savvy Saturday Stylers Slaying CSSBattle.dev doing puzzle 32 already, so I thought I
		should add it since I only started from puzzle 33.
	</Narigo>
	<Puzzle title="Puzzle 32 solution" solution={solution2} />
	<Narigo>
		And after Meg challenging me after me saying "I got a character less!", this is my newest
		solution. I saw that using some undefined element needs <code>display: block</code> to work like
		regular divs. Otherwise you have to resort to using <code>position: fixed</code> or
		<code>display: block</code> on those elements. 🤔
	</Narigo>
</PuzzlePageLayout>

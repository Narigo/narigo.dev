<script>
	import Code from '$lib/common/Code.svelte';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r><r><style>*+*{display:grid;place-items:center}r{position:fixed;rotate:45deg;width:50;height:200;background:#A3A368}r>r{rotate:90deg;background:#F3AC3C;mix-blend-mode:screen`;
</script>

<PuzzlePageLayout title="Band-aid">
	<Puzzle title="Puzzle 32 solution" {solution} />
	<Narigo>
		I saw the Savvy Saturday Stylers Slaying CSSBattle.dev doing puzzle 32 already, so I thought I
		should add it since I only started from puzzle 33.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  *{background:#191919;overflow:visible;}
  div,div:before,div:after {
    content:'';
    position:fixed;
    inset: 38% 166px;
    width: 50px;
    height: 50px;
    border: 10px solid #5DBCF9;
    -webkit-box-reflect: right -70px;
  }
  div:after {
    border-radius:50% 50% 0;
    translate:-60px -60px;
    -webkit-box-reflect: below 50px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Command Key">
	<Puzzle title="Puzzle 63 solution" {solution} />
	<Narigo>
		<p>
			This time it was Satoshi and me, but I had a little blocker on my arm, so I had to solve it a
			day later on my own. I like <code>-webkit-box-reflect</code>, but I'm always a bit surprised
			how it works - especially when using absolute or fixed positioning and pseudo-elements. I
			think, I need to look into this more!
		</p>
		<p>
			I wanted to try solving it using the Unicode character "⌘" as the CSSBattle discussions
			sometimes say that people are using UTF-8 characters to solve puzzles. I can't make it over
			92.1% with this char, so I'm unsure how that works for others.
		</p>
	</Narigo>
</PuzzlePageLayout>

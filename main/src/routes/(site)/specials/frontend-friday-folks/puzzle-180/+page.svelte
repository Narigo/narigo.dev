<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*>*{margin:0;border-top:100px solid#13AA4B;border-bottom:100px solid#EC1E25;border-left:127q solid#000`;
</script>

<PuzzlePageLayout title="Kuwait" puzzleId="180">
	<Puzzle title="Puzzle 180 solution" {solution} />
	<Narigo>
		<p>
			The second session of the CSS Battles at JSCraftCamp 2024 started with this puzzle. There were
			multiple ideas what this could be: Four divs for each color. One background with linear
			gradient and a black div on top. One div with different border colors. The last one seemed to
			be the simplest of them and we used this to quickly create it. We looked a bit into code
			golfing but we could see that the best solution seemed to use some other idea.
		</p>
		<p>
			We didn't bother googling it, but since I got asked, I shared how I found out about better
			solutions usually: Check the leaderboard, google for the names of the first places, check
			their GitHub or websites whether they share their solutions somewhere.
		</p>
	</Narigo>
</PuzzlePageLayout>

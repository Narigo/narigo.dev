<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  body {
    --b:radial-gradient(1q,#998235 200px,#0000 0) 0 150px / 100% 400px;
    background:
      var(--b) no-repeat,
      radial-gradient(1q,#1A4341 100px,#F3AC3C 0 125px,#0000 0),
      var(--b),
      #F3AC3C
    ;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Eclipse" puzzleId="90">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			We started late, but we saw a couple of people joining later and learning about our CSS
			tricks. <a href="https://www.twitch.tv/notmichaella" rel="external"
				>Micha, who streamed solving CSS battles on Twitch</a
			>
			before, joined us this time. Find
			<a href="https://github.com/orgs/Virtual-Coffee/discussions/1214" rel="external"
				>our solutions on the VC discussion board</a
			> as well!
		</p>
		<p>
			For the solution, I've exploited the background pattern to have the same radial gradient
			twice, since both "golden" half circles match and touch each other (below the teal one). This
			allowed the use of a variable (<Code>--b</Code>) with and without background repeat.
		</p>
		<p>
			Oh, and Meg taught me that instead of writing <Code>radial-gradient(circle, ...)</Code>, I can
			write <Code>radial-gradient(1q, ...)</Code>! This could shave off quite a few characters... 😅
		</p>
	</Narigo>
</PuzzlePageLayout>

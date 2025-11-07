<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q,#998235 30px,#0000) 10px,
      radial-gradient(1q,#FCBE5C 50px,#0000),
      radial-gradient(1q,#0B2429 70px,#0000) 10px,
      radial-gradient(1q,#FCBE5C 90px,#0000),
      #998235
    ;
  }
`;
</script>

<PuzzlePageLayout title="Alien Eye" puzzleId="136">
	<Puzzle title="Radial gradient solution" {solution} />
	<Narigo>
		<p>
			Obviously, I can only think of radial gradients! Today we had Sara joining us, stacking divs
			over each other with <Code>position: absolute</Code>. You can
			<a href="https://github.com/orgs/Virtual-Coffee/discussions/1432" rel="external"
				>find her solution (and others) in our discussion thread</a
			>.
		</p>
	</Narigo>
</PuzzlePageLayout>

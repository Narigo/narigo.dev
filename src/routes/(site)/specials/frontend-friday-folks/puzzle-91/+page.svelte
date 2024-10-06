<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>*&{
  background:
    linear-gradient(#6CB3A9 15px, #0000 0 25px, #6CB3A9 0 40px, #0000 0 50px, #6CB3A9 0 65px, #0000 0 75px, #6CB3A9 0 90px,#0000 0) 0 150px / 100% 50% no-repeat,
    radial-gradient(1q,#F6DF96 100px, #0000 0),
    linear-gradient(#D25B70 50%, #6CB3A9 0);
}`;

	const solution2 = `<style>&{
  background:
    radial-gradient(1q at 50% 100%,#F6DF96 100px, #D25B70 0) 0 0 / 400px 150px no-repeat,
    radial-gradient(1q,#0000 100px, #6CB3A9 0),
    linear-gradient(#6CB3A9 15px, #F6DF96 0 25px)0 0/100%25px`;
</script>

<PuzzlePageLayout title="Reflection">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			The first solution was pretty straight forward, drawing red and blue, the sun and then a
			gradient to add the reflection effect.
		</p>
	</Narigo>
	<Puzzle title="Solution 2" solution={solution2} />
	<Narigo>
		<p>
			By making the reflection first, using a "transparent" sun and moving the red sun part as a
			single, non-repeating background on top, this saved some characters. Thinking about
			transparency and layers really allows a lot of options using gradients.
		</p>
	</Narigo>
</PuzzlePageLayout>

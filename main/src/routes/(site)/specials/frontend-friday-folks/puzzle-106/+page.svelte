<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>&{background:
linear-gradient(#D4392D,#D4392D)50% 70px / 10px 20% no-repeat,
#000;
&::after,&::before {
  content:'';
  inset:0;
  position:absolute;
  --g: radial-gradient(110q 93q,#D4392D 63.5q, #0000 0);
  --t: translate(29px)rotate(-57deg);
  background:var(--g);
  transform:var(--t);
}
&::before {
  background:
    radial-gradient(1q,#000 31px, #0000 0)48px 30px,
    radial-gradient(1q,#000 31px, #0000 0)14px 52px,
    var(--g);
  transform:scaleX(-1)var(--t);
}
`;
</script>

<PuzzlePageLayout title="Ryuk's Apple" puzzleId="106">
	<Puzzle title="100% Solution" {solution} />
	<Narigo>
		<p>
			This is a puzzle that is really hard to do with gradients, as we basically have rotated
			ellipses here.
		</p>
	</Narigo>
</PuzzlePageLayout>

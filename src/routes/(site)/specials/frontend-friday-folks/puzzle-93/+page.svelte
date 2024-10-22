<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q,#0000 100px,#4F77FF 0),
      radial-gradient(1q,#F9E492 20px,#0000 0) -40px -40px,
      linear-gradient(146deg,#191919 10px,#D6B73F 0 23px,#191919 0 32px,#D6B73F 0 45px,#191919 0 53px,#D6B73F 0 67px,#0000 0) 200px 160px / 20px 100px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 220px 159px / 200px 78px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 0 172px / 200px 78px no-repeat,
      #191919;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Great Wall">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This time, there were a couple of solutions. One trying to build the three lines line by line,
			another building part by part. As somewhat usual now, I've used gradients to solve it.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  & {
    background: 
      radial-gradient(circle at 200px 110px, #FE5F55 20px, #0000 0),
      radial-gradient(circle at 200px 190px, #FE5F55 20px, #0000 0),
      radial-gradient(circle at 240px 150px, #A64942 20px, #0000 0),
      radial-gradient(circle at 160px 150px, #A64942 20px, #0000 0),
      linear-gradient(#FE5F55 230px, #0000 0) 50% -115px / 40px repeat-y,
      linear-gradient(90deg,#A64942 330px, #0000 0) -165px 50% / 100% 40px repeat-x,
      #191919;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Junction" {solution}>
	<Narigo>Ah, lovely gradients!</Narigo>
</PuzzlePageLayout>

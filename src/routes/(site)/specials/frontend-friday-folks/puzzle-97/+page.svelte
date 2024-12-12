<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
&{
  background:
    /* scarf */
    radial-gradient(1q at 175px 148px,#FFA63F 5px, #0000),
    radial-gradient(1q at 225px 148px,#FFA63F 5px, #0000),
    linear-gradient(#FFA63F,#FFA63F) 50% 143px / 54px 10px no-repeat,
    linear-gradient(#0000 139px, #AC474B 0 157px,#0000 0),

    /* hat */
    linear-gradient(#0E1F2B 15px,#fff 0 25px,#0E1F2B 0 30px) 50% 55px / 40px 40px no-repeat,
    linear-gradient(#0E1F2B,#0E1F2B) 50% 95px / 60px 5px no-repeat,

    /* head */
    radial-gradient(1q at 190px 118px,#0E1F2B 5px, #0000),
    radial-gradient(1q at 210px 118px,#0E1F2B 5px, #0000),
    radial-gradient(1q at 200px 125px,#fff 30px, #0000),

    /* body */
    radial-gradient(1q at 200px 195px,#fff 50px, #AC474B);
}`;
</script>

<PuzzlePageLayout title="Snowman">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This was a try-out to build the snowman completely with gradients. The comments should help to
			identify what has been drawn.
		</p>
	</Narigo>
</PuzzlePageLayout>

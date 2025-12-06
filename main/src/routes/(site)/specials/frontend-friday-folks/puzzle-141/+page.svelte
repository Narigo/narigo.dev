<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{background:
    radial-gradient(1q at 50% -70px,#D9D9D9 100px,#E3516E 0) 0 149px / 400px 70px no-repeat,
    radial-gradient(1q at 50% 140px,#D9D9D9 100px,#E3516E 0) 0 81px / 400px 70px no-repeat,
    conic-gradient(#E3516E 90deg,#3210 0 180deg, #E3516E 0 270deg,#3210 0),
    radial-gradient(1q at 80px 80px,#D9D9D9 75px,#E3516E 0) -80px -80px / 400px 300px
    }`;
	const solution99 = `<div></div>
<style>
  &{
    background:
      radial-gradient(1q at 50% -75q,#3210 106q,#E3516E 0) 0 159q/100%70px no-repeat,
      radial-gradient(1q at 50% 149q,#3210 106q,#E3516E 0) 0 85q/100%70px no-repeat,
      #D9D9D9
  }
div {position:fixed;inset:0;
  corner-shape: scoop;
  border-radius:79.5q 0;
  border:90q solid#E3516E
}`;
</script>

<PuzzlePageLayout title="Third Eye" puzzleId="141">
	<Puzzle title="Third Eye solution" {solution} />
	<Narigo>
		<p>
			In the beginning, I thought this could be done by a repeating gradient solution, but I failed
			miserably.
		</p>
	</Narigo>
	<Puzzle title="Third Eye 99.9% solution" solution={solution99} />
	<Narigo>
		<p>
			I've tried using <Code>corner-shape: scoop</Code> here, but it always ended up in 99.9% only. Even
			though the diff looks better with corner-shape, I could not get it to 100%.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
&{background:
radial-gradient(1q at 100%0,#62306D 25px,#F7EC7D 0)-300px 200px no-repeat,
radial-gradient(1q at 37.5px 138px,#F7EC7D 37.5px,#3210 0),
radial-gradient(1q at 162px 262.5px,#F7EC7D 38px,#3210 0),
conic-gradient(#F7EC7D,#F7EC7D)-240px 225px/100% 80px no-repeat,
conic-gradient(#F7EC7D,#F7EC7D)0px 140px/75px 100% no-repeat,
#62306D
}`;
</script>

<PuzzlePageLayout title="Long heart" puzzleId="144" {solution}>
	<Narigo>
		Multiple divs or gradients? For me, I kind of like keeping the elements to a minimum, but I'm
		unsure whether I'd do that in production code...
	</Narigo>
</PuzzlePageLayout>

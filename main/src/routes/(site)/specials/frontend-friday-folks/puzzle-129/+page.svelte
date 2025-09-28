<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
  body {
    background:#6592CF;
    place-items: center;
    margin: 80px -80px 0px 0px;
  }
  div,div:before,div:after {
    content:'';
    position:absolute;
    width: 100px;
    height: 80px;
    background: var(--c,#515DBD);
    border-radius: 0 40px 40px 0;
    -webkit-box-reflect: below -20px;
    &:before{
      --c:#2E3B9F;
      left:-40px;
    }
    &:after{
      --c:#060F55;
      left:-80px;
    }
  }
</style>`;
</script>

<PuzzlePageLayout title="Letter B" puzzleId="129">
	<Puzzle title="Letter B solution" {solution} />
	<Narigo>
		<p>
			Feels like quite a while that I've used <Code>-webkit-box-reflect</Code>. This was quite nice
			using a single div with pseudo-elements, becoming essentially like 6 elements with the
			reflect!
		</p>
	</Narigo>
</PuzzlePageLayout>

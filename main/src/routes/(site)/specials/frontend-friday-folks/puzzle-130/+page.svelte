<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div w></div>
<style>
  body {background:#926927}
  [w] {
    position: fixed;
    left:160px;
    top:70px;
    width: 60;
    height: 120;
    border: 20px solid #fff;
    border-radius: 30px;
    box-shadow:-20px 0 #6D480A, -20px 0 #6D480A inset;
  }
</style>`;
	const dropShadowSolution = `<div w></div>
<style>
  body {background:#926927}
  [w] {
    position: fixed;
    left:160px;
    top:70px;
    width: 60;
    height: 120;
    border: 20px solid #fff;
    border-radius: 30px;
    filter: drop-shadow(-20px 0 #6D480A);
  }
</style>`;
	const minimalSolution = `<style>&{background:#926927;margin:62 33%62 152;*{border:solid+22q#fff;border-radius:32q;filter:drop-shadow(-21q+0#6D480A`;
</script>

<PuzzlePageLayout title="Letter O" puzzleId="129">
	<Puzzle title="Letter O solution" {solution} />
	<Narigo>
		<p>
			Today, I learned a lot. While this thing didn't really look like something new, I learned
			multiple things today! For example, all of us thought we need a second element inside to
			create the inner radial of the border. So with this solution I learned:
		</p>
		<p>
			Using a <Code>border-radius</Code> larger than the <Code>border-size</Code> results in inner radius
			being curved as well.
		</p>
		<p>
			You can use both default AND <Code>inset</Code> on <Code>box-shadow</Code> on the same element.
		</p>
	</Narigo>
	<Puzzle title="Letter O filter drop-shadow solution" solution={dropShadowSolution} />
	<Narigo>
		<p>
			Instead of using <Code>box-shadow</Code>, you can use the <Code>filter: drop-shadow</Code> to have
			shadows in transparent regions. This allows having just one of them.
		</p>
	</Narigo>
	<Puzzle title="Letter O minimal solution" solution={minimalSolution} />
	<Narigo>
		<p>Oh and this was the minimal solution I found. No elements necessary!</p>
	</Narigo>
</PuzzlePageLayout>

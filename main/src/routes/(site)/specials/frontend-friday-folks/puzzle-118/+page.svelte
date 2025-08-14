<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import CodeBlock from '$lib/common/CodeBlock.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div l>
  <div></div>
</div>
<style>
  body{
  --s:20px 50px no-repeat;
  --g:conic-gradient(#fff,#fff);
    background:
    var(--g) 79%/20px 90px no-repeat,
    var(--g) 50% 60%/var(--s),
    var(--g) 21% 40%/var(--s),
    #000}
[l]{
  margin:75 auto;display:grid;place-items:center;width:280;height:150;
  div{rotate:-4deg}
  &:after,&:before,div{
    display:block;
    width:100%;
    content:'';
    border: 10px solid #AF067C;
    border-radius: 10px;
  }
}
</style>`;
</script>

<PuzzlePageLayout title="Donkey Kong" puzzleId="118">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			Ok, so the solution was kind of okay like this: A couple of gradients for the white "ladders"
			and the inside <Code>div</Code> and its pseudo elements <Code>:before</Code> and <Code
				>:after</Code
			> for the purple floors.
		</p>
		<p>
			I can't remember why, but after doing this CSS Battle, I've researched a bit about this new <Code
				>hsl(from currentColor h s l)</Code
			> syntax. When playing around with it for a bit, I noticed a but that reproducibly crashed Chrome
			for me with pure CSS. I've submitted a bug report which got fixed pretty fast - but it is fixed
			in the latest stable versions now.
		</p>
	</Narigo>
</PuzzlePageLayout>

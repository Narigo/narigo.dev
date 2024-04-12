<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<z><r></r></z>
<style>
  body {
    display: grid;
    place-items: center;
    background: #F3AC3C;
  }
  z {
    width: 100;
    height: 100;
    background: #F3AC3C;
    outline: 30px #998235 solid;
    rotate: 45deg;
    translate: -2px;
  }
  r {
    position: fixed;
    background: transparent;
    border: 30px #F3AC3C solid;
    width: 100;
    height: 100;
    translate: -95px -95px;
  }
  r::after {
    position: inherit;
    content:'';
    height: 30;
    width: 30;
    translate: 100px 100px;
    background: #1A4341;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Piano" {solution}>
	<Narigo>
		I haven't been around for a bit and this week I was late as well. Meg decided we'll be doing
		this one, so I got to share this time. It's the first time, I could use <Code>outline</Code> and
		get 100%! Too bad I had to add an extra element (or pseudo element at least) to overlap something.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div><div></div><div></div><div></div><div></div><div></div><div></div></div>
<style>
  body{display:grid;place-items:center;background:#191919}
  body>div {
    width: 100;
    height: 150;
    background: #4F77FF;
    border-radius: 50px 50px 0 0;
    display: flex;
    place-items:end;
    position:relative;
    --num: 0;
  }
  div:nth-child(1) {--num: 1}
  div:nth-child(2) {--num: 2}
  div:nth-child(3) {--num: 3}
  div:nth-child(4) {--num: 4}
  div:nth-child(5) {--num: 5}
  div + div {
    width: 99%;
    height: 20;
    position:absolute;
    background: #191919;
    bottom:calc((var(--num) - 1) * 24px);
    left:calc(var(--num) * 20px);
  }
</style>
`;
</script>

<PuzzlePageLayout title="Stairway" {solution}>
	<Narigo>
		We had to stop solving this due to time constraints and before we actually got somewhere. I've
		tried looking into counters and using that as a variable. Turns out, this is not possible to use
		a counter inside a calc right now. To still make it work somewhat, I've used a variable.
	</Narigo>
</PuzzlePageLayout>

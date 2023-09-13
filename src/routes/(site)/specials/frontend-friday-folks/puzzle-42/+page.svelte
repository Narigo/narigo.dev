<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div></div>
<style>
body {
  background: #293462;
  display: grid;
  place-items: center;
}  
  div {
    background:
      radial-gradient(circle, #FFF1C1 50px, transparent 50px) 0px -200px / 50% 200%,
      radial-gradient(circle, #FFF1C1 30px, transparent 25px) 0px -80px / 50% 200%,
      #FE5F55
    ;
    border-radius: 50% 50% 50px 50px;
    width: 200px;
    height: 200px;
  }
  div::after {
    background: #FFF1C1;
    content: '';
    border-radius: 10px;
    position: absolute;
    left: 45%;
    bottom: 70px;
    height: 10px;
    width: 40px;
  }
</style>`;
</script>

<PuzzlePageLayout title="Baby">
	<Puzzle title="Puzzle 42 solution" {solution} />
	<Narigo>
		I missed Frontend Fridays this time, since it was a holiday here in Germany and I kept my phone
		muted for the whole day. Terribly sorry for not giving a heads-up, but there were a couple of
		people and <a href="https://github.com/orgs/Virtual-Coffee/discussions/846" rel="external"
			>contributing solutions to Puzzle 42</a
		>. I'm happy I didn't look into them before coming up with my own, so it's actually quite
		different, this time using background size and repeat plus a pseudo element.
	</Narigo>
</PuzzlePageLayout>

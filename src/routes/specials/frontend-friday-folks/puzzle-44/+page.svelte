<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  body {
    background: 
      radial-gradient(circle, #1A4341 50vh, transparent 0) -50vw,
      linear-gradient(#1A4341 0 60px, transparent 0 240px, #1A4341 0),
      repeating-linear-gradient(#1A4341 0 20px, #F3AC3C 0 40px)
    ;
  }
</style>`;

	const solution99 = `<div class="b">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<div class="l"></div>
<div class="r"></div>
<style>
  body {
    margin: 0;
    background: #1A4341;
    display: grid;
    place-items: center;
  }
  .b {
    width: 100%;
    height: 180px;
  }
  .b div {
    background: #F3AC3C;
    height: 20px;
  }
  .b div:nth-child(even) {
    background: #1A4341;
    height: 20px;
  }
  .l,.r {
    position: absolute;
    background: #1A4341;
    border-radius: 0 150px 150px 0;
    left: 0;
    height: 300px;
    width: 150px;
  }
  .r {
    border-radius: 150px 0 0 150px;
    left: unset;
    right: 0;
  }
</style>`;

	const borderSolution = `<style>
  body {
    border: 52px solid #1A4341;
    background: 
      radial-gradient(circle,#1A4341 50vh,transparent 0) -50vw,
      repeating-linear-gradient(#1A4341 0 20px,#F3AC3C 0 40px)
    ;
  }
</style>`;
</script>

<PuzzlePageLayout title="Stripes">
	<Puzzle title="Puzzle 44 solution 99.9%" solution={solution99} />
	<Narigo
		><p>
			This was a hard one! We initially created this solution with less divs, but this was always
			ending up in a 99.9% solution - even when the <code>Diff</code> view showed up almost completely
			black. Only when we zooming in the black diff-preview, we could see tiny discrepancies, but they
			weren't even solvable by incrementing by half-pixel values or similar.
		</p>
		<p>
			Very frustrating experience - it looks like sometimes you need to find a special way how to
			solve it. We still don't get, why this solution would be different to the one hundred percent
			solution below.
		</p></Narigo
	>
	<Puzzle title="Puzzle 44 solution 100%" {solution} />
	<Narigo
		>With this solution, achieving the 100% were no problem. I think I would have gone for this in
		the first place, but solving everything with gradients almost seems to be cheating to me now.</Narigo
	>
	<Puzzle title="Puzzle 44 improved" solution={borderSolution} />
	<Narigo
		>There was another solution, which improved the character count a bit, by using a border on the
		body instead of the transparent linear-gradient. Not much has changed otherwise, but it's good
		to see that sometimes you can solve things differently. Still 100% with this approach. When
		zooming in, I can't really see a difference to the 99% solution. I believe the circles to the
		side somehow are calculated differently in the 99% solution then.</Narigo
	>
</PuzzlePageLayout>

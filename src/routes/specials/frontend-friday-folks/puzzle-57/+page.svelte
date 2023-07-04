<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r>
  <div id=a>
  <div class=pillar>
    <div class=blue></div>
  </div>
  </div>
</r>
<style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  r {
    width: 110px;
    height: 110px;
    background: #4F77FF;
  }

  #a {
    -webkit-box-reflect: below 60px;
  }

  .pillar {
    background: #F9E492;
    border-radius: 50%;
    box-shadow: #191919 8px 8px 0px 7px;
    margin: -20px;
    height: 45px;
    width: 45px;
    -webkit-box-reflect: right 60px;
  }

  .blue {
    background: #4F77FF;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Skull">
	<Puzzle title="Puzzle 57 solution" {solution} />
	<Narigo>
		<p>
			Lots of <code>-webkit-box-reflect</code> in here! We did this 100% solution at the
			<a href="https://jscraftcamp.org" rel="external">JSCraftCamp 2023</a> in a group. Later, we started
			working on another solution with gradients. Somehow the numbers didn't really add up, so maybe
			other units like percentages or similar should have been used to cleanly get to 100%.
		</p>
		<p>
			Interestingly, using <code>r</code> (or other non-assigned names) as an element name seems to work
			out as block elements!
		</p>
	</Narigo>
</PuzzlePageLayout>

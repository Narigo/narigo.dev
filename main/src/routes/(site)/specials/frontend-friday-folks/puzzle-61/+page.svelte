<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<r>
  <div t></div>
  <div b></div>
  <div d></div>
</r>
<p w1></p>
<p w2></p>
<style>
  body{
    background: #191919;
    margin: 76 0;
  }
  r{
    display: grid;
    place-items: center;
  }
  div {
    box-sizing:border-box;
    border: 10px solid #5DBCF9;
    margin-top: -10px;
  }
  [t] {
    height: 40px;
    width: 50px;
  }
  [b] {
    height: 70px;
    width: 100px;
  }
  [d]{
    border:0;
    display: flex;
    position:relative;
    -webkit-box-reflect: right;
  }
  [d]::before,[d]::after {
    position: absolute;
    content:'';
    box-sizing:border-box;
    border: 0;
    border-top:45px solid #0000;
    border-bottom:135px solid #0000;
    border-right: 78px solid #5DBCF9;
    left:-78;
    top:-35;
  }
  [d]::after {
    left:-65;
    top:-21;
    border-top:35px solid #0000;
    border-bottom:106px solid #0000;
    border-right: 60px solid #191919;
  }
  [r]{
    transform:scaleX(-1);
  }
  [w1],[w2] {
    position: absolute;
    border: 10px solid #191919;
    background: #5DBCF9;
    width: 200px;
    height: 10px;
    translate: 90px 12px;
  }
  [w2] {
    width: 110px;
    translate: 135px 32px;
    border-bottom-width: 100;
  }
</style>`;
</script>

<PuzzlePageLayout title="ImprovMX">
	<Puzzle title="Puzzle 61 solution" {solution} />
	<Narigo>
		I missed it today due to work, but I finally came around with a solution to this. It was quite
		tricky, but I got 100% even though it doesn't look like my solution looks like a complete match
		to me. I used the "three transparent borders make a triangle" trick to get the ships deck.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div>
  <div a>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
  <div b>
    <r></r>
    <r></r>
    <r x></r>
    <r></r>
    <r></r>
    <r></r>
  </div>
  </div>
  <style>
    body {
      display: grid;
      place-items: center;
      background: #998235;
    }
    div {
      position: relative;
    }
    [a] {
      width: 180;
      height: 100;
      background: #191919;
      border-radius: 10px;
      display: grid;
      grid-template-columns: repeat(7, 20px);
      justify-content: space-between;
      box-sizing: border-box;
      padding: 25px 5px 5px;
    }
    [b] {
      position:absolute;
      width: 180;
      height: 100;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: repeat(6, 15px);
      justify-content: space-between;
      padding: 0 20;
      top:20;
    }
    p {
      background: #fff;
      margin: 0;
      padding: 0;
      border-radius: 5px;
    }
    r {
      background: #191919;
      width: 15;
      height: 40;
    }
    [x] {
      background: #0000;
    }
  </style>`;
</script>

<PuzzlePageLayout title="Piano" {solution}>
	<Narigo>
		This was special! We've tested Eddie's collaborative CSSBattle.dev script and it worked out
		well! You connect through a websocket server and this script syncs the slider and the text for
		all browsers. Really nice to see it working!
	</Narigo>
</PuzzlePageLayout>

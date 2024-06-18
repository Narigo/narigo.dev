<script>
	import Code from '$lib/common/Code.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div class="head">
  <div class="hat"></div>
  <div class="eyes"></div>
  <div class="mustache"><div></div></div>
</div>
<style>
  body {
    background: #E38F66;
    display: grid;
    place-items: center;
  }
  .head {
    width: 180px;
    height: 220px;
  }
  .hat {
    height:50%;
    background:#FFFBDA;
    margin:0 30;
    border-radius: 50% 50% 0 0;
    position: relative;
  }
  .hat::after {
    content: '';
    width:45vw;
    height:20px;
    background:#FFFBDA;
    border-radius:10px;
    position:absolute;
    left:-30;
    bottom:0;
  }
  .eyes {
    background: radial-gradient(circle at 120px 32px, #0000 10px, #FFFBDA 0 20px, #0000 0),radial-gradient(circle at 60px 32px, #FFFBDA 10px, #0000 0);
    height: 70
  }

  .mustache {
    margin-left: 45;
    width: 40px;
    height: 40px;
    -webkit-box-reflect: right 10px;
  }
  .mustache>*{
    background: #FFFBDA;
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 50% 0;
    transform: rotate(45deg)`;
</script>

<PuzzlePageLayout title="Monopoly">
	<Puzzle title="Puzzle 157 solution" {solution} />
	<Narigo>
		The last puzzle we did at JSCraftCamp 2024. Right at the end of the hour, we finalized the
		mustache by using <Code>-webkit-box-reflect</Code>.
	</Narigo>
</PuzzlePageLayout>

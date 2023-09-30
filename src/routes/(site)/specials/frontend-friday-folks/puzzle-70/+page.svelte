<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div><l></l><n></n></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items:center
  }
  div {
    margin-left: -75px;
    margin-top: 20px;
    width: 75px;
    height: 100px;
    border-radius: 50px 0 0 50px;
    background: radial-gradient(circle at 100% -125px, #FE5F55 0 195px, #A64942 0);
    position:relative;
    -webkit-box-reflect: right;
  }
  l {
    width: 30px;
    height: 30px;
    background:radial-gradient(#293462 5px, #FFF1C1 0);
    position:absolute;
    top: -25px;
    left: 15px;
    border: 10px solid #FE5F55;
    border-radius: 50%;
  }
  n {
    width:10px;
    height:10px;
    background:#293462;
    position:absolute;
    border-radius: 50%;
    top: 50px;
    left: 60px;
  }
</style>`;

	const solution2 = `<div><l></l></div>
<style>
  body {
    background: #293462;
    display: grid;
    place-items:center
  }
  div {
    margin-left: -75px;
    margin-top: 20px;
    width: 75px;
    height: 100px;
    border-radius: 50px 0 0 50px;
    background: radial-gradient(circle at 65px 55px, #293462 0 5px, #0000 0),
      radial-gradient(circle at 100% -125px, #FE5F55 0 195px, #A64942 0);
    position:relative;
    -webkit-box-reflect: right;
  }
  l {
    width: 30px;
    height: 30px;
    background:radial-gradient(#293462 5px, #FFF1C1 0);
    position:absolute;
    top: -25px;
    left: 15px;
    border: 10px solid #FE5F55;
    border-radius: 50%;
  }
</style>`;
</script>

<PuzzlePageLayout title="Froggy">
	<Puzzle title="Puzzle 70 solution" {solution} />
	<Narigo>
		I'm not sure whether webkit-box-reflect helps too much here. What I don't like is having the
		mouth part. I'd like to know how this can be calculated instead of having to try and test lots
		of values until something works for 100%.
	</Narigo>
	<Puzzle title="Puzzle 70 solution" solution={solution2} />
	<Narigo>Ok, using another radial gradient makes sense instead of adding another element.</Narigo>
</PuzzlePageLayout>

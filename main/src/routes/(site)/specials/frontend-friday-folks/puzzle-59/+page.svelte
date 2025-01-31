<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<p><style>
  body {
    background: #191919;
    display: grid;
    place-items: center;
  }
  p,p:after {
    position:relative;
    height: 170px;
    width: 170px;
    background: #4f77ff;
  }
  p,p:before {
    box-sizing: border-box;
    border-radius: 50%;
    border: 10px solid #191919;
  }
  p:before {
    position: absolute;
    content: '';
    border-radius: 50%;
    top: -30px;
    left: -90px;
    width: 210px;
    height: 210px;
    -webkit-box-reflect: right -90px;
  }
  p:after {
    position: absolute;
    content: '';
    background:
      repeating-linear-gradient(#0000 0 30px, #191919 0 40px),
      linear-gradient(90deg, #0000 0 70px, #191919 0 80px, #0000 0)
      #0000;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Earth" puzzleId="59">
	<Puzzle title="Puzzle 59 solution" {solution} />
	<Narigo>
		None of us got it to 100% (yet). The solution above is only 99.9% as well. Getting the inner
		circle parts took a while and trying to use scale couldn't work thanks to the border. I lost my
		best solution somewhere while trying out different approaches.
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const animatedSolution = `<div><p hourglass></p></div>
<style>
  body {
    display:grid;
    place-items:center;
    background:#151917;
  }
  div {
    width: 210px;
    height: 210px;
    border: 20px solid #D83A34;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  [hourglass] {
    --rotation-angle: 0deg;
    position: absolute;
    top: 64px;
    border: 63.3px solid transparent;
    border-top: 94.5px solid #D83A34;
    border-bottom: 0;
    -webkit-box-reflect: below -50px;
    transform-origin: 50% 70px;
    animation: glass 5s infinite linear;
    transform: rotate(var(--rotation-angle)) scale(var(--scale));
  }

@property --rotation-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
@property --scale {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
  @keyframes glass {
    0%,10% {
      --rotation-angle: 0deg;
      --scale: 100%;
    }
    20% {
      --scale: 200%;
    }
    30%,70% {
      --rotation-angle: 180deg;
    }
    80% {
      --scale: 100%;
    }
    90%,100% {
      --rotation-angle: 360deg;
    }
  }
</style>`;
</script>

<PuzzlePageLayout title="Black Widow logo" puzzleId="210">
	<Narigo>
		<p>
			At JSCraftCamp 2025, we went with this one and tried out different ways. In the end, we even
			animated it.
		</p>
	</Narigo>
	<Puzzle title="Puzzle 210 animatedSolution" solution={animatedSolution} />
	<Narigo>
		<p>
			This is an animation as someone asked about animations. We added custom properties so you can
			actually animate the rotation degree through a variable.
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<style>
  &{
    background:
      radial-gradient(1q,#0000 100px,#4F77FF 0),
      radial-gradient(1q,#F9E492 20px,#0000 0) -40px -40px,
      linear-gradient(146deg,#191919 10px,#D6B73F 0 23px,#191919 0 32px,#D6B73F 0 45px,#191919 0 53px,#D6B73F 0 67px,#0000 0) 200px 160px / 20px 100px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 220px 159px / 200px 78px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 0 172px / 200px 78px no-repeat,
      #191919;
  }
</style>
`;

	const solutionAnimation = `<style>
  @property --x {
    syntax: "<angle>";
    inherits: false;
    initial-value: 90deg;
  }
  @property --c {
    syntax: "<color>";
    inherits: false;
    initial-value: #4F77FF;
  }
  @property --sun {
    syntax: "<color>";
    inherits: false;
    initial-value: hsl(226.36deg 100% 65.49%);
  }
  &{
    animation: moon 4s infinite forwards linear;
    background:
      radial-gradient(1q,#0000 100px,var(--c) 0),
      linear-gradient(146deg,#0000 10px,#D6B73F 0 23px,#191919 0 32px,#D6B73F 0 45px,#191919 0 53px,#D6B73F 0 67px,#191919 0) 200px 160px / 20px 100px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 220px 159px / 200px 100px no-repeat,
      linear-gradient(#F9E492 16px,#191919 0 26px,#F9E492 0 42px,#191919 0 52px,#F9E492 0 68px,#191919 0) 0 172px / 200px 78px no-repeat,
      radial-gradient(1q,#F9E492 20px,#0000 0) calc(sin(var(--x)) * 30px * 2) calc(cos(var(--x)) * -70px),
      var(--sun);
  }
  @keyframes moon {
    0% {
      --c: hsl(226.36deg 100% 10%);
      --x: -120deg;
      --sun: hsl(226.36deg 100% 0%);
    }
    10%{
      --sun: hsl(26.36deg 100% 35.49%);
    }
    25%{
      --c: hsl(226.36deg 100% 65.49%);
      --sun: hsl(226.36deg 100% 65.49%);
    }
    40%{
      --sun: hsl(256.36deg 100% 35.49%);
    }
    50%,100% {
      --c: hsl(226.36deg 100% 10%);
      --x: 140deg;
      --sun: hsl(226.36deg 100% 0%);
    }
  }
</style>
`;
</script>

<PuzzlePageLayout title="Great Wall">
	<Puzzle title="Solution" {solution} />
	<Narigo>
		<p>
			This time, there were a couple of solutions. One trying to build the three lines line by line,
			another building part by part. As somewhat usual now, I've used gradients to solve it.
		</p>
	</Narigo>
	<Puzzle title="Animation" solution={solutionAnimation} />
	<Narigo>
		<p>
			After getting everything done, we thought it would look fun to have a nice animation. This is
			the first time I've used custom properties with <Code>@property</Code> and it felt quite simple
			and fun to use. Happy to see a lot of browser adoption already!
		</p>
	</Narigo>
</PuzzlePageLayout>

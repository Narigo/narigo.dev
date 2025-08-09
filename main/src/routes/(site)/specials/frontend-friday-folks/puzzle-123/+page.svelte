<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Code from '$lib/common/Code.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<article>
<div c></div>
<div t></div>
<div r></div>
<div b></div>
</article>
<style>
  body {
    display: grid;
    place-items: center;
    background:
      #C74E4E;
  }
  article {
    display: grid;
    grid-template-areas:
      "c t"
      ". r"
      "b b";
  }
  div {
    height: 25px;
    width: 25px;
    background:
      radial-gradient(1q at -10% -10%,transparent 33px, #C74E4E 0) 50% 50% / 25px 25px,
      radial-gradient(1q at 110% -10%,transparent 33px, #C74E4E 0) 50% 50% / 25px 25px,
      radial-gradient(1q at 110% 110%,transparent 33px, #C74E4E 0) 50% 50% / 25px 25px,
      radial-gradient(1q at -10% 110%,transparent 33px, #C74E4E 0) 50% 50% / 25px 25px,
      linear-gradient(to right,transparent 0 20px, #C74E4E 0) 2.5px 2.5px / 25px 25px,
      linear-gradient(#E0E246 0 20px, #C74E4E 0) 2.5px 2.5px / 25px 25px
    ;
  }
  [c] {
    grid-area: c;
    height: 27q;
    width: 27q;
    background: radial-gradient(#FFFFFF 11q, #0000 0);
  }
  [t] {
    justify-self: end;
    grid-area: t;
    width: 125;
  }
  [r] {
    justify-self: end;
    grid-area: r;
    height: 75.5;
  }
  [b] {
    grid-area: b;
    width: 225;
  }
</style>
`;
</script>

<PuzzlePageLayout title="Snake" puzzleId="123">
	<Puzzle title="Snake solution" {solution} />
	<Narigo>
		<p>
			This is embarassing - I've only got this to a 99.9% solution and this is the first time we let
			people from JSCraftCamp into the CSS battles. The idea was to use repeating gradient images to
			generate the pattern of the snake. Three divs with this repeating background should work, but
			it ended up being not quite as perfect. At the same time, Arvind solved it with a 100% with
			multiple divs instead. It's definitely the simpler solution!
		</p>
	</Narigo>
</PuzzlePageLayout>

<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Puzzle from '../Puzzle.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div s></div>
<div h></div>
<div r></div>
<div t></div>
<div w a></div>
<div w b></div>
<div w c></div>
<style>
  *{position:absolute}
  [h]{
    height: 150;
    width: 20;
    top:150;
    left: 181.5;
    background: #E96A23;
  }
  [t]{
    top: 0;
    left: 0;
    width: 384px;
    height: 284px;
    background:
      radial-gradient(1q, #161616 10px, #A22015 0 15px, #fff 0 25px,#A22015 0 30px, #0000 0);
  }
  [r]{
    height: 40;
    width: 30;
    left:177;
    top:155;
    border-radius: 10px;
    background:#A22015;
  }
  [w]{
    left: 121.5;
    top: 124;
    height:12px;
    width:53px;
    border-radius:0 0 0 15px;
    background:#fff;
    &[b]{
      width: 33px;
      left:137;
      top:136;
    }
    &[c]{
      width: 23px;
      left:152;
      top:148;
    }
  }
  [s]{
    left:192;
    top:121;
    height: 40px;
    width: 80px;
    border-radius: 0 60px 6px 0;
    background:#E96A23;
  }
&{
  background:
  #161616
}
</style>`;
</script>

<PuzzlePageLayout title="Sealing Wand" puzzleId="107">
	<Puzzle title="100% Solution" {solution} />
	<Narigo>
		<p>
			Ok, this could have been done with gradients, but since there are so many little rounded
			corners, it's just easier to do it with lots of border-radius elements than gradients.
			Gradients could have worked as well, if done with correct translations and cut out radials,
			but this amount of gradients sounds like a lot of work to me.
		</p>
	</Narigo>
</PuzzlePageLayout>

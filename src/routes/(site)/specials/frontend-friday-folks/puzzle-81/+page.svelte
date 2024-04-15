<script>
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PuzzlePageLayout from '../PuzzlePageLayout.svelte';

	const solution = `<div a></div>
<div b></div>
<div></div>
<div></div>
<style>
  body {
    display: grid;
    place-items:center;
    background:#191919;
    grid-template-columns: repeat(4, 1fr);
    padding: 28px;
  }
  div {
    position:relative;
    margin-top:23;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-sizing:border-box;
    border:20px solid #8F8F8F;
  }
  [a] {
    border-color:#714B67;
  }
  [b]::before {
    position: absolute;
    top: -40;
    right: -20;
    content:'';
    height:70px;
    width:20px;
    border-radius:20px;
    background:#8F8F8F;
  }
</style>`;
</script>

<PuzzlePageLayout title="Odoo" {solution}>
	<Narigo>I missed this one and I still need to solve this.</Narigo>
</PuzzlePageLayout>

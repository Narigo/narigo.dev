<script lang="ts">
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import Ornaments from './Ornaments.svelte';
</script>

<PageLayout>
	<h1>Ornaments</h1>
	<Narigo>
		In the first of the Frontend Friday Folks event of 2024, we did something different: A codepen
		to learn SVGs. We did this <a href="https://codepen.io/Narigo/pen/bGZpGvp" rel="external"
			>Codepen hanging ornaments on a christmas tree</a
		>.
	</Narigo>
	<Ornaments />
</PageLayout>

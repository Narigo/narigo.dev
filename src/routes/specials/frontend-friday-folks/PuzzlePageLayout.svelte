<script lang="ts">
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';

	export let solution: string;
	export let title: string;

	const trimmedSolution = solution.trim();
</script>

<PageLayout>
	<div class="iframe-container">
		<iframe
			{title}
			style="background: white; width: 400px; height: 300px; border: 0px; outline: 0px; box-sizing: border-box;"
			srcdoc={`<html><head><style>body{overflow:hidden;}</style></head><body>${trimmedSolution}</body></html>`}
		/>
	</div>
	<div>Highlighted solution ({trimmedSolution.length} characters)</div>
	<pre>{trimmedSolution}</pre>
	<slot />
</PageLayout>

<style>
	.iframe-container {
		aspect-ratio: 4/3;
		box-sizing: border-box;
		height: 300px;
		overflow: hidden;
		position: relative;
		width: 400px;
	}
	.iframe-container * {
		box-sizing: border-box;
	}
	.iframe-container :global(html),
	.iframe-container :global(body) {
		max-height: 100%;
	}
	iframe {
		height: 100%;
		width: 100%;
	}
</style>

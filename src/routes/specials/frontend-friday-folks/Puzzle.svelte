<script lang="ts">
	import { onMount } from 'svelte';

	export let solution: string;
	export let title: string;

	const trimmedSolution = solution.trim();

	let iframe: HTMLIFrameElement;
	onMount(() => {
		const processedCode = `<style>body{overflow:hidden}</style>${trimmedSolution}`;
		iframe.contentDocument?.open();
		iframe.contentDocument?.write(processedCode);
		iframe.contentDocument?.close();
	});
</script>

<div class="iframe-container">
	<iframe
		bind:this={iframe}
		{title}
		style="background: white; width: 400px; height: 300px; border: 0px; outline: 0px;"
	/>
</div>
<div>Highlighted solution ({solution.length} characters)</div>
<pre>{solution}</pre>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
	}
	.iframe-container {
		box-sizing: border-box;
		height: 100%;
		overflow: hidden;
		position: relative;
		width: 100%;
	}
</style>

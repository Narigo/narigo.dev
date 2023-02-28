<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import theme from 'svelte-highlight/styles/classic-dark';

	export let code: string;
</script>

<svelte:head>
	{@html theme}
</svelte:head>

<HighlightSvelte {code} let:highlighted>
	<LineNumbers {highlighted} wrapLines />
</HighlightSvelte>

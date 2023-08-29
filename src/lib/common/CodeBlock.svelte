<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import theme from 'svelte-highlight/styles/darcula';
	import SvelteHeadOnce from './SvelteHeadOnce.svelte';

	export let code: string;
</script>

<SvelteHeadOnce>
	{@html theme}
</SvelteHeadOnce>

<HighlightSvelte {code} let:highlighted>
	<LineNumbers {highlighted} wrapLines />
</HighlightSvelte>

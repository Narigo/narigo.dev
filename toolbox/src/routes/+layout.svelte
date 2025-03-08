<script lang="ts">
	import '@fontsource/fira-sans/200';
	import '@fontsource/fira-sans/400';
	import '@fontsource/fira-sans/400-italic';
	import '@fontsource/fira-sans/600';
	import '@fontsource/fira-sans/700';
	import '@fontsource/fira-code';
	import '@fontsource/fira-mono';
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.postcss';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

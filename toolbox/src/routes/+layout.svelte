<script lang="ts">
	import '@fontsource/fira-sans';
	import '@fontsource/fira-code';
	import '@fontsource/fira-mono';
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>

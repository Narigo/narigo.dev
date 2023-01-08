<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { afterUpdate } from 'svelte';
	import Animation from './Animation.svelte';

	let encrypted: string | null;
	let lines: string[] = [];

	afterUpdate(() => {
		encrypted = $page.url.searchParams.get('e');
		if (browser && encrypted) {
			lines = JSON.parse(decode(encrypted));
		}
	});

	function decode(str: string): string {
		const result = decodeURIComponent(window.atob(str));
		return result;
	}
</script>

<PageLayout>
	{#if encrypted === null}
		<p>Do you want to <a href="{base}/specials/talking/create">create your own</a>?</p>
	{/if}
	<Animation {lines} />
</PageLayout>

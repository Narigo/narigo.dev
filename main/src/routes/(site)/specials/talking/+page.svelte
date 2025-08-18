<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { onMount } from 'svelte';
	import Animation from './Animation.svelte';
	import { resolve } from '$app/paths';

	let encrypted: string | undefined = $state();
	let lines: { side: 'left' | 'right'; avatar?: string; line: string }[] = $state([]);

	onMount(() => {
		encrypted = $page.url.searchParams.get('e') ?? undefined;
		if (!(browser && encrypted)) {
			return;
		}
		const object = JSON.parse(decode(encrypted));
		if (Array.isArray(object)) {
			lines = (object as string[]).map((line, index) => ({
				side: index % 2 === 0 ? 'left' : 'right',
				line
			}));
			return;
		}
		lines = (object.l as string[]).map((line, index) => ({
			side: index % 2 === 0 ? 'left' : 'right',
			avatar: object.f?.[index % 2],
			line
		}));
	});

	function decode(str: string): string {
		const result = decodeURIComponent(window.atob(str));
		return result;
	}
</script>

<PageLayout
	title="Talking animation"
	description="This experiment allows you to create some cartoon animation with Gravatar images and custom text bubbles without saving it to a server."
>
	{#if encrypted === undefined}
		<p>Do you want to <a href={resolve('/specials/talking/create')}>create your own</a>?</p>
	{:else}
		<Animation {lines} />
	{/if}
</PageLayout>

<script lang="ts">
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { onMount } from 'svelte';
	import Recharge from './Recharge.svelte';

	let encrypted: string | null;
	let data: { person: string; emojis: string; message: string } = {
		person: '',
		emojis: '',
		message: ''
	};

	onMount(() => {
		encrypted = $page.url.searchParams.get('e');
		if (browser && encrypted) {
			data = JSON.parse(decode(encrypted));
		}
	});

	function decode(str: string): string {
		const result = decodeURIComponent(window.atob(str));
		return result;
	}
</script>

<PageLayout
	title="Recharger"
	description="A little experiment I've created to try and cheer someone up."
>
	{#if encrypted === null}
		<p>Do you want to <a href="{base}/specials/recharge/create">create your own</a>?</p>
	{:else}
		<Recharge person={data.person} emojis={data.emojis} message={data.message} />
	{/if}
</PageLayout>

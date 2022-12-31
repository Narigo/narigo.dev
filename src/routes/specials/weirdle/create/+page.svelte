<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { writable } from 'svelte/store';

	let word: string = '';
	let link = writable<string>('');

	function submitForm(e: Event) {
		e.preventDefault();
		console.log({ word });
		const enc = window.btoa(word);
		$link = `${base}/specials/weirdle/play?enc=${encodeURIComponent(enc)}`;
	}
</script>

<PageLayout>
	<p>Please enter a word</p>
	<form on:submit={submitForm}>
		<input type="text" bind:value={word} maxlength="5" minlength="5" />
		<button>Create a link</button>
	</form>
	{#if $link}<p>Here is your puzzle: <a href={$link} rel="external">{$link}</a></p>{/if}
</PageLayout>

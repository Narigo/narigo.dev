<script lang="ts">
	import { resolve } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { writable } from 'svelte/store';

	let person = writable<string>('');
	let emojis = writable<string>('');
	let message = writable<string>('');
	let link = writable<string>('');

	function encode(str: string): string {
		return window.btoa(encodeURIComponent(str));
	}

	function submitForm(e: Event) {
		e.preventDefault();
		const encUrl = encode(JSON.stringify({ person: $person, emojis: $emojis, message: $message }));
		$link = `${resolve('/specials/recharge')}?e=${encodeURIComponent(encUrl)}`;
	}
</script>

<PageLayout>
	<h2>Recharge someone</h2>
	<form onsubmit={submitForm}>
		<label for="person">Who do you want to recharge?</label>
		<input id="person" type="text" bind:value={$person} />
		<label for="emojis">With what do you want to recharge them?</label>
		<input id="emojis" type="text" bind:value={$emojis} />
		<label for="message">Special message?</label>
		<input id="message" type="text" bind:value={$message} />
		<button type="submit">Create a link</button>
	</form>
	{#if $link}
		<p>
			Here is your link:
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={$link} rel="external">{$link}</a>
		</p>
	{/if}
</PageLayout>

<style>
	form {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1em;
	}

	input {
		width: 100%;
	}

	button {
		font-family: inherit;
		padding: 1em;
	}

	button:last-of-type {
		grid-column: 1 / 3;
	}
</style>

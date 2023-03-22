<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { writable } from 'svelte/store';

	let lines = writable<string[]>(['']);
	let link = writable<string>('');

	function encode(str: string): string {
		return window.btoa(encodeURIComponent(str));
	}

	function submitForm(e: Event) {
		e.preventDefault();
		const encUrl = encode(JSON.stringify($lines));
		$link = `${base}/specials/talking?e=${encodeURIComponent(encUrl)}`;
	}
</script>

<PageLayout>
	<h2>Talking</h2>
	<form on:submit={submitForm}>
		{#each $lines as line, index}
			<label for="talking-create-line-{index}">Character {index % 2 === 0 ? 'A' : 'B'}:</label>
			<input id="talking-create-line-{index}" type="text" bind:value={line} />
		{/each}
		<button type="button" on:click={() => ($lines = $lines.slice(0, -1))}>Remove last line</button>
		<button type="button" on:click={() => ($lines = [...$lines, ''])}>Add a line</button>
		<button type="submit">Create a link</button>
	</form>
	{#if $link}<p>Here is your link: <a href={$link} rel="external">{$link}</a></p>{/if}
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

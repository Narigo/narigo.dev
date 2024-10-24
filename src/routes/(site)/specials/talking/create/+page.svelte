<script lang="ts">
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { writable } from 'svelte/store';

	/**
	 * There are two encoding formats right now:
	 * 1. Array of lines, with two talking heads;
	 * ['line 1 of char A', 'line 1 of char B', 'line 2 of char A', 'line 2 of char B', 'line 3 of char A', ...]
	 *
	 * 2. Object with gravatar.com hashes to show real faces:
	 * {
	 *   f: ['gravatar.com hash for character A', 'gravatar.com hash for character B'],
	 *   l: ['line 1 of char A', 'line 1 of char B', 'line 2 of char A', 'line 2 of char B', 'line 3 of char A', ...]
	 * }
	 */

	let lines = writable<string[]>(['']);
	let link = writable<string>('');
	let characterA: string = $state('');
	let characterB: string = $state('');

	function encode(str: string): string {
		return window.btoa(encodeURIComponent(str));
	}

	function submitForm(e: Event) {
		e.preventDefault();
		const toEncode =
			characterA !== '' || characterB !== '' ? { f: [characterA, characterB], l: $lines } : $lines;
		const encUrl = encode(JSON.stringify(toEncode));
		$link = `${base}/specials/talking?e=${encodeURIComponent(encUrl)}`;
	}
</script>

<PageLayout>
	<h2>Talking</h2>
	<form onsubmit={submitForm}>
		<label for="talking-create-face-a"
			>Gravatar hash of character A:<br />(leave empty for no Gravatar)</label
		>
		<input id="talking-create-face-a" type="text" bind:value={characterA} />
		<label for="talking-create-face-b"
			>Gravatar hash of character B:<br />(leave empty for no Gravatar)</label
		>
		<input id="talking-create-face-b" type="text" bind:value={characterB} />
		{#each $lines as line, index}
			<label for="talking-create-line-{index}">Character {index % 2 === 0 ? 'A' : 'B'}:</label>
			<input id="talking-create-line-{index}" type="text" bind:value={line} />
		{/each}
		<button type="button" onclick={() => ($lines = $lines.slice(0, -1))}>Remove last line</button>
		<button type="button" onclick={() => ($lines = [...$lines, ''])}>Add a line</button>
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

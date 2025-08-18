<script lang="ts">
	import { resolve } from '$app/paths';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { writable } from 'svelte/store';

	let word: string = $state('');
	let hint: string = $state('');
	let wordList: string = $state('');
	let link = writable<string>('');

	function submitForm(e: Event) {
		e.preventDefault();
		const encUrl = encodeURIComponent(window.btoa(word));
		const hintUrl = hint.trim() !== '' ? `&hint=${encodeURIComponent(window.btoa(hint))}` : '';
		const wordListUrl = wordList !== '' ? `&wl=${encodeURIComponent(wordList)}` : '';
		$link = `${resolve('/specials/weirdle/play')}?enc=${encUrl}${hintUrl}${wordListUrl}`;
	}
</script>

<PageLayout>
	<h2>Weirdle</h2>
	<Bubble>Please configure your game!</Bubble>
	<form onsubmit={submitForm}>
		<div>
			<Bubble side="right">The word that is the solution to the puzzle.</Bubble>
		</div>
		<label for="weirdle-create-word">Word:</label>
		<input id="weirdle-create-word" type="text" bind:value={word} />
		<div>
			<Bubble side="right">Give a hint to the player, if you have and want to give one.</Bubble>
		</div>
		<label for="weirdle-create-hint">Hint:</label>
		<input id="weirdle-create-hint" type="text" bind:value={hint} />
		<div>
			<Bubble side="right"
				>If you want to limit the player to a word list, please select it here. (Not available yet)</Bubble
			>
		</div>
		<label for="weirdle-create-select-word-list">Word list?</label>
		<select id="weirdle-create-select-word-list" bind:value={wordList} disabled>
			<option value="">No word list</option>
			<option value="de">German word list</option>
			<option value="en">English word list</option>
		</select>
		<button disabled={word.length <= 1}>Create a link</button>
	</form>
	{#if $link}<p>Here is your puzzle: <a href={$link} rel="external">{$link}</a></p>{/if}
</PageLayout>

<style>
	form {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-rows: 2 / 1;
		gap: 1em;
	}

	button {
		font-family: inherit;
		padding: 1em;
	}
	div,
	button {
		grid-column: 1 / 3;
	}

	div {
		font-size: 0.8em;
		margin-bottom: -1em;
	}
</style>

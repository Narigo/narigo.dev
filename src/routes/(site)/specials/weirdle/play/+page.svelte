<!-- @migration-task Error while migrating Svelte code: Can't migrate code with afterUpdate. Please migrate by hand. -->
<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { onMount } from 'svelte';
	import Game from './Game.svelte';
	import type { FiveLetterString } from './gameTypes';

	let timeNeeded = $state(0);
	let encryptedWord = $state('');
	let hint = $state('');
	let gameWord = $derived(
		encryptedWord ? (window.atob(encryptedWord) as FiveLetterString) : undefined
	);
	let gameHint = $derived(hint ? window.atob(hint) : undefined);

	onMount(() => {
		encryptedWord = $page.url.searchParams.get('enc');
		hint = $page.url.searchParams.get('hint');
	});

	async function getRandomWord(): Promise<string> {
		const startedAt = Date.now();
		const { possibleWords } = await import('$lib/weirdle/words2');
		const randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
		timeNeeded = Date.now() - startedAt;
		return randomWord;
	}
</script>

<PageLayout>
	<h2>Weirdle</h2>
	{#if !encryptedWord}
		<p>Please use a proper link with an 'enc' parameter attached to it!</p>
		{#if browser}
			{#await getRandomWord()}
				<p>Loading a random word...</p>
			{:then randomWord}
				<p>
					Or do you want to play <a href="?enc={encodeURIComponent(window.btoa(randomWord))}"
						>a randomly selected word</a
					>? (generated in {timeNeeded}ms)
				</p>
			{:catch err}
				<p>Got an error:</p>
				<pre>{err}</pre>
			{/await}
		{/if}
	{:else if !browser}
		<p>This game needs to be played in a browser with JavaScript enabled.</p>
	{:else}
		<Game word={gameWord} hint={gameHint} />
	{/if}
</PageLayout>

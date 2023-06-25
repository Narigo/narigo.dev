<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { afterUpdate } from 'svelte';
	import Game from './Game.svelte';

	let encryptedWord: string | null;
	let hint: string | null;
	let timeNeeded = 0;

	afterUpdate(() => {
		encryptedWord = $page.url.searchParams.get('enc');
		hint = $page.url.searchParams.get('hint');
	});

	async function getRandomWord(): Promise<string> {
		timeNeeded = Date.now();
		const { possibleWords } = await import('$lib/weirdle/words2');
		const randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
		timeNeeded = Date.now() - timeNeeded;
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
		<Game word={window.atob(encryptedWord)} hint={hint ? window.atob(hint) : undefined} />
	{/if}
</PageLayout>

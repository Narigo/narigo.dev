<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import { afterUpdate } from 'svelte';
	import Game from './Game.svelte';

	let encryptedWord: string | null;
	let hint: string | null;
	const possibleWords = ['hello', 'below', 'canon', 'alpha', 'stare'];
	const randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

	afterUpdate(() => {
		encryptedWord = $page.url.searchParams.get('enc');
		hint = $page.url.searchParams.get('hint');
	});
</script>

<PageLayout>
	<h2>Weirdle</h2>
	{#if !encryptedWord}
		<p>Please use a proper link with an 'enc' parameter attached to it!</p>
		{#if browser}
			<p>
				Or do you want to play <a href="?enc={encodeURIComponent(window.btoa(randomWord))}"
					>a randomly selected word</a
				>?
			</p>
		{/if}
	{:else if !browser}
		<p>This game is to be played in a browser with JavaScript enabled.</p>
	{:else}
		<Game word={window.atob(encryptedWord)} hint={hint ? window.atob(hint) : undefined} />
	{/if}
</PageLayout>

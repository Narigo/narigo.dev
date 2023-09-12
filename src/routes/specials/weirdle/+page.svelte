<script>
	import { base } from '$app/paths';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Weirdle</h2>
	<p>
		I like to play <a
			href="https://www.nytimes.com/games/wordle/index.html"
			rel="external noopener noreferrer"
			target="_blank">Wordle</a
		>. But sometimes, I'd like to let someone else decide on a word for me to play. With this
		version, you can create your own word and pass it to a friend.
	</p>
	<p><a href="{base}/specials/weirdle/create">Create your own word</a></p>
	<p><a href="{base}/specials/weirdle/play">Play a random word</a></p>
</PageLayout>

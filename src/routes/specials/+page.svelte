<script>
	import { base } from '$app/paths';
	import Bubble from '$lib/common/Bubble.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<Bubble>Hey, what's up with this page?</Bubble>
	<Bubble delay={1000} side="right">I thought I may want to write some code here.</Bubble>
	<Bubble delay={2000}>Okay, but ...</Bubble>
	<Bubble delay={3000}>what?</Bubble>
	<Bubble delay={4000} side="right">For example an animation for this "exchange" here.</Bubble>
	<Bubble delay={5000} side="right"
		>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</Bubble
	>
	<Bubble delay={6000} side="right"
		>Or a clone of a word game where you can provide your own word: <a
			href="{base}/specials/weirdle">Weirdle</a
		></Bubble
	>
</PageLayout>

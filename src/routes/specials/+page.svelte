<script>
	import { base } from '$app/paths';
	import Bubble from '$lib/common/Bubble.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<Bubble>Hey, what's up with this page?</Bubble>
	<Bubble side="right">I thought I may want to write some code here.</Bubble>
	<Bubble>Okay, but ...</Bubble>
	<Bubble>what?</Bubble>
	<Bubble side="right">For example an animation for this "exchange" here.</Bubble>
	<Bubble side="right"
		>Or a clone of a word game where you can provide your own word: <a
			href="{base}/specials/weirdle">Weirdle</a
		></Bubble
	>
</PageLayout>

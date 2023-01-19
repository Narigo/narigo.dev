<script>
	import { base } from '$app/paths';
	import Bubble from '$lib/common/Bubble.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<Bubble animation="dialog" delayNext={1000}>Hey, what's up with this page?</Bubble>
	<Bubble animation="dialog" delayNext={1000} side="right"
		>I thought I may want to write some code here.</Bubble
	>
	<Bubble animation="dialog" delayNext={1000}>Okay, but ...</Bubble>
	<Bubble animation="dialog" delayNext={1000}>what?</Bubble>
	<Bubble animation="dialog" delayNext={1000} side="right"
		>For example an animation for this "exchange" here.</Bubble
	>
	<Bubble animation="dialog" delayNext={1000} side="right"
		>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</Bubble
	>
	<Bubble animation="dialog" delayNext={1000} side="right"
		>Or a clone of a word game where you can provide your own word: <a
			href="{base}/specials/weirdle">Weirdle</a
		></Bubble
	>
	<Bubble animation="dialog" delayNext={1000} side="right"
		>Or <a href="{base}/specials/recharge">Recharge</a> someone</Bubble
	>
</PageLayout>

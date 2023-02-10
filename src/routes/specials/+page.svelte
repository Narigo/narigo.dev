<script>
	import { base } from '$app/paths';
	import Bubble from '$lib/common/Bubble.svelte';
	import BubbleNarigo from '$lib/common/BubbleNarigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<Bubble animation="dialog" delayNext={1000}>Hey, what's up with this page?</Bubble>
	<BubbleNarigo animation="dialog" delayNext={1000} side="right"
		>I thought I may want to write some code here.</BubbleNarigo
	>
	<Bubble animation="dialog" delayNext={1000}>Okay, but ...</Bubble>
	<Bubble animation="dialog" delayNext={1000}>what?</Bubble>
	<BubbleNarigo animation="dialog" delayNext={1000} side="right"
		>For example an animation for this "exchange" here.</BubbleNarigo
	>
	<BubbleNarigo animation="dialog" delayNext={1000} side="right"
		>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</BubbleNarigo
	>
	<BubbleNarigo animation="dialog" delayNext={1000} side="right"
		>Or a clone of a word game where you can provide your own word: <a
			href="{base}/specials/weirdle">Weirdle</a
		></BubbleNarigo
	>
	<BubbleNarigo animation="dialog" delayNext={1000} side="right"
		>Or <a href="{base}/specials/recharge">Recharge</a> someone</BubbleNarigo
	>
</PageLayout>

<script>
	import { base } from '$app/paths';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<Bubble animation="dialog" delayNext={1000}>Hey, what's up with this page?</Bubble>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>I thought I may want to write some code here.</Narigo
	>
	<Bubble animation="dialog" delayNext={1000}>Okay, but ...</Bubble>
	<Bubble animation="dialog" delayNext={1000}>what?</Bubble>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>For example an animation for this "exchange" here.</Narigo
	>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</Narigo
	>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>Or a clone of a word game where you can provide your own word: <a
			href="{base}/specials/weirdle">Weirdle</a
		></Narigo
	>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>Or <a href="{base}/specials/recharge">Recharge</a> someone</Narigo
	>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>Or read about things I learnt in small <a href="{base}/specials/today-i-learnt">TIL</a> posts.</Narigo
	>
	<Narigo animation="dialog" delayNext={1000} side="right"
		>Or look up solutions from <a href="{base}/specials/frontend-friday-folks"
			>Frontend Friday Folks</a
		>.</Narigo
	>
</PageLayout>

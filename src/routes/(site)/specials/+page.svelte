<script>
	import { base } from '$app/paths';
	import AnimationContext from '$lib/common/bubble/AnimationContext.svelte';
	import Bubble from '$lib/common/bubble/Bubble.svelte';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import StopAllAnimations from '$lib/common/bubble/StopAllAnimations.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Specials</h2>
	<AnimationContext name="dialog" defaultDelay={1000} let:isDone let:stopAllAnimations>
		{#if !isDone}
			<StopAllAnimations {stopAllAnimations} />
		{/if}

		<Bubble>Hey, what's up with this page?</Bubble>
		<Narigo side="right">I thought I may want to write some code here.</Narigo>
		<Bubble>Okay, but ...</Bubble>
		<Bubble delay={1500}>What?!</Bubble>
		<Narigo side="right">For example an animation for this "exchange" here.</Narigo>
		<Narigo side="right"
			>You can <a href="{base}/specials/talking/create">create your own</a>, if you want.</Narigo
		>
		<Narigo delay={1000} side="right"
			>Or a clone of a word game where you can provide your own word: <a
				href="{base}/specials/weirdle">Weirdle</a
			></Narigo
		>
		<Narigo delay={600} side="right"
			>Or <a href="{base}/specials/recharge">Recharge</a> someone.</Narigo
		>
		<Narigo delay={800} side="right"
			>Or look up solutions from <a href="{base}/specials/frontend-friday-folks"
				>Frontend Friday Folks</a
			>.</Narigo
		>
		<Narigo delay={900} side="right"
			>Or check previous events from <a href="{base}/specials/crafters-vs-codewars"
				>Crafters vs CodeWars</a
			>.</Narigo
		>
		<Narigo delay={600} side="right"
			>Or read about things I learnt in small <a href="{base}/specials/today-i-learnt">TIL</a> posts.</Narigo
		>
	</AnimationContext>
	<section>
		<h3>Some projects / links</h3>
		<Narigo>
			There are some projects I've created that I want to highlight a bit. I had a real need for
			these at some point in time and I'm pretty happy I can share some of them today.
		</Narigo>
		<ul>
			<li><a href="https://github.com/Narigo/keepass-diff" rel="external">keepass-diff</a></li>
			<li><a href="https://github.com/Narigo/reimemonster" rel="external">Reimemonster</a></li>
			<li><a href="https://github.com/Narigo/dripping-spray" rel="external">Dripping spray</a></li>
		</ul>
	</section>
</PageLayout>

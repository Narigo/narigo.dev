<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
</script>

<PageLayout>
	<h2>Crafters vs CodeWars</h2>
	<Narigo
		>At JSCraftCamp 2022, a lot of participants complained about the lack of events until the next
		JSCraftCamp. We decided to push the online community around JSCraftCamp and start by organizing
		more meetups.</Narigo
	>
	<ul>
		<li><a href="{base}/specials/crafters-vs-codewars/event-2023-03-09">Disemvowel Trolls</a></li>
		<li><a href="{base}/specials/crafters-vs-codewars/event-2023-04-11">Mumbling</a></li>
		<li>
			<a href="{base}/specials/crafters-vs-codewars/event-2023-04-20"
				>Sum of Digits / Digital Root</a
			>
		</li>
		<li>
			<a href="{base}/specials/crafters-vs-codewars/event-2023-05-04">Moving Zeros To The End</a>
		</li>
		<li>
			<a href="{base}/specials/crafters-vs-codewars/event-2023-05-11">Find the unique number</a>
		</li>
		<li>
			<a href="{base}/specials/crafters-vs-codewars/event-2023-05-18"
				>Stop gninnipS My sdroW!, Training on Multiples of 3 or 5, Who likes it?</a
			>
		</li>
	</ul>
</PageLayout>

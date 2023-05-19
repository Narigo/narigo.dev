<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Kata from './Kata.svelte';
	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
</script>

<PageLayout>
	{#if id && name}
		<Kata {id} {name}>
			<slot />
		</Kata>
	{:else}
		<slot />
	{/if}
	<Narigo>
		If you want to check out other katas we did, look at
		<a href="{base}/specials/crafters-vs-codewars/">the list of Crafters vs CodeWars events</a>.
	</Narigo>
</PageLayout>

<script lang="ts">
	import { base } from '$app/paths';
	import Narigo from '$lib/common/bubble/Narigo.svelte';
	import PageLayout from '$lib/common/PageLayout/PageLayout.svelte';
	import Kata from './Kata.svelte';
	interface Props {
		id?: string | undefined;
		name?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { id = undefined, name = undefined, children }: Props = $props();
</script>

<PageLayout>
	{#if id && name}
		<Kata {id} {name}>
			{@render children?.()}
		</Kata>
	{:else}
		<div class="grid gap-8">
			{@render children?.()}
		</div>
	{/if}
	<Narigo>
		If you want to check out other katas we did, look at
		<a href="{base}/specials/crafters-vs-codewars/">the list of Crafters vs CodeWars events</a>.
	</Narigo>
</PageLayout>

<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
		title?: string | Snippet;
	}
	let { children, title }: Props = $props();
</script>

<section>
	{#if title && typeof title === 'function'}
		{@render title()}
	{:else if title}
		<h2
			class="animate-announce mx-auto mb-2 flex flex-wrap items-center justify-center gap-4 text-center motion-reduce:animate-none"
		>
			<div class="inline-block">
				📢
				<div class="inline-block -scale-x-100">🗣️</div>
			</div>
			<div class="inline-block">{title}</div>
			<div class="inline-block">
				🗣️
				<div class="inline-block -scale-x-100">📢</div>
			</div>
		</h2>
	{/if}
	{@render children?.()}
</section>

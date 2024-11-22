<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		children: Snippet;
	}

	let { id, children }: Props = $props();
</script>

<section {id} class="col-[content]">
	{@render children?.()}
</section>

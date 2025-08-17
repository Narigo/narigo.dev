<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		left: Snippet;
		right: Snippet;
	}
	const { class: clazz, left, right }: Props = $props();
</script>

<div class="grid gap-4 sm:grid-cols-2 {clazz}">
	<div>
		{@render left()}
	</div>
	<div>
		{@render right()}
	</div>
</div>

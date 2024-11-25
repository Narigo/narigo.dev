<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		left: Snippet;
		right: Snippet;
	}
	const { class: clazz, left, right }: Props = $props();
</script>

<div class="grid sm:grid-cols-2 gap-4 {clazz}">
	<div>
		{@render left()}
	</div>
	<div>
		{@render right()}
	</div>
</div>

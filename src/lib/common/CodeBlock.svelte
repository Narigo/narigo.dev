<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import 'svelte-highlight/styles/darcula.css';

	interface Props {
		code: string;
	}

	let { code }: Props = $props();
</script>

<div class="text-xs">
	<HighlightSvelte {code} >
		{#snippet children({ highlighted })}
				<LineNumbers {highlighted} wrapLines />
					{/snippet}
		</HighlightSvelte>
</div>

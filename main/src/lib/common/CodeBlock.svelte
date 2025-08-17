<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import 'svelte-highlight/styles/darcula.css';

	interface Props {
		code: string;
	}

	let { code }: Props = $props();
</script>

<div class="prose-code:before:content-none prose-code:after:content-none text-xs">
	<HighlightSvelte {code} let:highlighted>
		<LineNumbers {highlighted} wrapLines />
	</HighlightSvelte>
</div>

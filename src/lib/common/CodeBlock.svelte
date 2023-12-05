<script lang="ts">
	import { HighlightSvelte, LineNumbers } from 'svelte-highlight';
	import 'svelte-highlight/styles/darcula.css';

	export let code: string;
</script>

<div class="text-xs">
	<HighlightSvelte {code} let:highlighted>
		<LineNumbers {highlighted} wrapLines />
	</HighlightSvelte>
</div>

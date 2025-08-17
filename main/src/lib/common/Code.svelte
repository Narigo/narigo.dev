<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<code class="rounded-sm border border-gray-500 bg-gray-100 px-1 py-0.5 text-xs break-words"
	>{@render children?.()}</code
>

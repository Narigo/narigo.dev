<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<code class="bg-gray-100 border border-gray-500 rounded-sm text-xs py-0.5 px-1 break-words"
	>{@render children?.()}</code
>

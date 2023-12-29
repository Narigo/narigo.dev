<script lang="ts">
	export let shake: boolean = true;
</script>

<div class="contents" class:shakeit={shake}>
	<slot {...{ ...$$props, class: shake ? 'shakeit' : '' }} />
</div>

<style lang="postcss">
	.shakeit > :global(*) {
		@apply animate-shake;
		text-transform: uppercase;
	}
</style>

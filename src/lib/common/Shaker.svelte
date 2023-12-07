<script lang="ts">
	export let shake: boolean = true;
</script>

<div class="contents" class:shakeit={shake}>
	<slot {...{ ...$$props, class: shake ? 'shakeit' : '' }} />
</div>

<style>
	.shakeit > :global(*) {
		animation-name: shake;
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-duration: 100ms;
		text-transform: uppercase;
	}

	@keyframes shake {
		0% {
			transform: translate(-2px, -1px);
		}
		20% {
			transform: translate(1px, 2px);
		}
		40% {
			transform: translate(2px, 1px);
		}
		60% {
			transform: translate(-1px, -1px);
		}
		80% {
			transform: translate(1px, 2px);
		}
		100% {
			transform: translate(-2px, -1px);
		}
	}
</style>

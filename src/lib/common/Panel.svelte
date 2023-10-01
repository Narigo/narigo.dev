<script lang="ts">
	export let textBgColor: string = 'rgba(var(--color-primary-rgb), .8)';
	export let rotation: number = Math.random() - 0.5;
</script>

<section style="--rotation: {rotation};--text-bg-color: {textBgColor};">
	<div class="text">
		<slot name="text" />
	</div>
	<div class="panel">
		<slot />
	</div>
</section>

<style lang="postcss">
	:root {
		--panel-padding: 0.5rem;
	}
	* {
		border: 2px solid #000;
		border-radius: 2px;
	}
	section {
		background: #fff;
		display: grid;
		padding: var(--panel-padding);
		position: relative;
		rotate: calc(var(--rotation) * 1deg);
	}
	.text {
		background: var(--text-bg-color);
		padding: 0.25rem;
		position: absolute;
		top: var(--panel-padding);
		right: var(--panel-padding);
	}
	.panel {
		min-height: 2rem;
	}
</style>

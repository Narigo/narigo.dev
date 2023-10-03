<script lang="ts">
	export let textBgColor: string = 'rgba(var(--color-primary-rgb), .8)';
	export let textColor: string = '#fff';
	export let rotation: number = Math.random() - 0.5;
</script>

<section style="--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};">
	<div class="text">
		<span><slot name="text" /></span>
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
		rotate: calc(var(--rotation) * 1deg);
	}
	.text {
		border-bottom: 0;
		display: flex;
		justify-content: end;
	}
	.text span {
		background: var(--text-bg-color);
		color: var(--text-color);
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		font-size: 0.75rem;
		margin: -2px;
		padding: 0.25rem;
	}
	.panel {
		border-top: 0;
	}
</style>

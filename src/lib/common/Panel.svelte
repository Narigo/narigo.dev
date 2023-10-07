<script lang="ts">
	export let textBgColor: string = 'rgba(var(--color-primary-rgb), .8)';
	export let textColor: string = '#fff';
	export let rotation: number = Math.random() - 0.5;
	export let classes: string;
</script>

<section
	class={classes}
	style="--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};"
>
	<div class="panel">
		<div class="text">
			<span><slot name="text" /></span>
		</div>
		<div class="image">
			<slot />
		</div>
	</div>
</section>

<style lang="postcss">
	:root {
		--panel-padding: 0.5rem;
	}
	section,
	.panel,
	.text span {
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
</style>

<script lang="ts">
	interface Props {
		textBgColor?: string;
		textColor?: string;
		rotation?: number;
		outerClass?: string;
		class?: string;
		text?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let {
		textBgColor = 'var(color-primary)',
		textColor = '#fff',
		rotation = Math.random() - 0.5,
		outerClass,
		class: classes,
		text,
		children
	}: Props = $props();
</script>

<section
	class="grid rotate-[calc(--rotation*1deg)] rounded-sm border-2 border-black bg-white p-(--panel-padding) {outerClass}"
	style="--panel-padding: 0.5rem;--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};"
>
	<div class="panel rounded-sm border-2 border-black">
		{#if text}
			<div class="text relative z-10 float-right inline-flex justify-end">
				<span
					class="-m-[2px] rounded-sm border-2 border-black bg-(--text-bg-color) p-1 font-sans text-xs text-(--text-color)"
					>{@render text?.()}</span
				>
			</div>
		{/if}
		<div class="image {classes}">
			{@render children?.()}
		</div>
	</div>
</section>

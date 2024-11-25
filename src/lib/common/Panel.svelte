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
		textBgColor = 'rgb(var(--color-primary-rgb) / 1)',
		textColor = '#fff',
		rotation = Math.random() - 0.5,
		outerClass,
		class: classes,
		text,
		children
	}: Props = $props();
</script>

<section
	class="bg-white grid p-[--panel-padding] rotate-[calc(--rotation_*_1deg)] border-2 border-black rounded-sm {outerClass}"
	style="--panel-padding: 0.5rem;--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};"
>
	<div class="panel border-2 border-black rounded-sm">
		{#if text}
			<div class="text relative z-10 inline-flex justify-end float-right">
				<span
					class="border-2 border-black rounded-sm bg-[--text-bg-color] text-[--text-color] font-sans text-xs -m-[2px] p-1"
					>{@render text?.()}</span
				>
			</div>
		{/if}
		<div class="image {classes}">
			{@render children?.()}
		</div>
	</div>
</section>

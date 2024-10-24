<script lang="ts">
	interface Props {
		textBgColor?: string;
		textColor?: string;
		rotation?: number;
		classes: string;
		text?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
	}

	let {
		textBgColor = 'rgb(var(--color-primary-rgb) / .8)',
		textColor = '#fff',
		rotation = Math.random() - 0.5,
		classes,
		text,
		children
	}: Props = $props();
</script>

<section
	class="bg-white grid p-[--panel-padding] rotate-[calc(--rotation_*_1deg)] border-2 border-black rounded-sm {classes}"
	style="--panel-padding: 0.5rem;--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};"
>
	<div class="panel border-2 border-black rounded-sm">
		<div class="text flex justify-end">
			<span
				class="border-2 border-black rounded-sm bg-[--text-bg-color] text-[--text-color] font-sans text-xs -m-[2px] p-1"
				>{@render text?.()}</span
			>
		</div>
		<div class="image">
			{@render children?.()}
		</div>
	</div>
</section>

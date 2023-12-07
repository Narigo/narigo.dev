<script lang="ts">
	export let textBgColor: string = 'rgb(var(--color-primary-rgb) / .8)';
	export let textColor: string = '#fff';
	export let rotation: number = Math.random() - 0.5;
	export let classes: string;
</script>

<section
	class="bg-white grid p-[--panel-padding] rotate-[calc(--rotation_*_1deg)] border-2 border-black rounded-sm {classes}"
	style="--panel-padding: 0.5rem;--rotation: {rotation};--text-bg-color: {textBgColor};--text-color: {textColor};"
>
	<div class="panel border-2 border-black rounded-sm">
		<div class="text flex justify-end">
			<span
				class="border-2 border-black rounded-sm bg-[--text-bg-color] text-[--text-color] font-sans text-xs -m-[2px] p-1"
				><slot name="text" /></span
			>
		</div>
		<div class="image">
			<slot />
		</div>
	</div>
</section>

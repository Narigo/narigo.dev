<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section>
	<slot name="title">
		{#if title}
			<h2 class="animate-announce motion-reduce:animate-none flex flex-wrap gap-4 items-center justify-center mx-auto mb-2 text-center">
				<div class="inline-block">
					📢
					<div class="inline-block -scale-x-100">🗣️</div>
				</div>
				<div class="inline-block">{title}</div>
				<div class="inline-block">
					🗣️
					<div class="inline-block -scale-x-100">📢</div>
				</div>
			</h2>
		{/if}
	</slot>
	<slot />
</section>

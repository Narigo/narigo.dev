<script lang="ts">
	import type { ExtractedImage } from './DocumentScanner.svelte';

	interface PreviewBarProps {
		images: Array<ExtractedImage>;
		removeImage: (image: number) => void;
		addImage: () => void;
	}

	let { images, removeImage, addImage }: PreviewBarProps = $props();
</script>

<ol class="flex h-32 flex-row gap-4">
	{#each images as image, index}
		{#if image.result}
			<li
				class="relative max-h-32 max-w-32"
				style="aspect-ratio:{image.result!.height}/{image.result!.width}"
			>
				<input type="checkbox" name="image-{index}" value="selected" />
				<button class="h-4 w-4" onclick={() => removeImage(index)}>x</button>
				<button class="absolute top-0 right-0 h-full" onclick={() => (image.result = undefined)}
					><img
						class="max-h-full"
						src={image.result.toDataURL('image/jpeg', 0.9)}
						alt="Scanned image number {index}"
					/></button
				>
			</li>
		{/if}
	{/each}
	<li class="relative max-h-32 max-w-32" style="aspect-ratio:3/2">
		<button class="h-full w-full border bg-gray-100" onclick={() => addImage()}>+</button>
	</li>
</ol>

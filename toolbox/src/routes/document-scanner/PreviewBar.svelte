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
	{#each images as image, index (image.source)}
		{#if image.result}
			<li
				class="relative isolate max-h-32 max-w-32 border"
				style="aspect-ratio:{image.result!.height}/{image.result!.width}"
			>
				<button
					class="trashcan absolute -top-2 -right-2 z-10 h-10 w-10 rounded-full border text-transparent"
					onclick={() => removeImage(index)}>Remove image</button
				>
				<button class="absolute h-full w-full" onclick={() => (image.result = undefined)}
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
		<button class="h-full w-full border bg-gray-100" onclick={() => addImage()}>Add scan</button>
	</li>
</ol>

<style>
	.trashcan {
		--trashcan-color: gray;
		background:
			radial-gradient(circle at 50% 22.5%, var(--trashcan-color) 5%, #3210 0) no-repeat,
			linear-gradient(var(--trashcan-color), var(--trashcan-color)) 50% 25% / 55% 10% no-repeat,
			linear-gradient(
					to right,
					var(--trashcan-color) 0 16%,
					transparent 16% 21%,
					var(--trashcan-color) 21% 37%,
					transparent 37% 42%,
					var(--trashcan-color) 42% 58%,
					transparent 58% 63%,
					var(--trashcan-color) 63% 79%,
					transparent 79% 84%,
					var(--trashcan-color) 84% 100%
				)
				50% 60% / 50% 45% no-repeat,
			linear-gradient(
					var(--trashcan-color) 10%,
					hsl(from var(--trashcan-color) h s calc(1.5 * l)) 10% 90%,
					var(--trashcan-color) 0 100%
				)
				50% 60% / 50% 45% no-repeat,
			#fff;
	}
</style>

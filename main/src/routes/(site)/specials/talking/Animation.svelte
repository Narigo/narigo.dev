<script lang="ts">
	import AnimationContext from '$lib/common/bubble/AnimationContext.svelte';
	import Bubble, { type TalkMode } from '$lib/common/bubble/Bubble.svelte';

	interface Props {
		lines: { side: 'left' | 'right'; avatar?: string; line: string }[];
	}

	let { lines }: Props = $props();
</script>

<AnimationContext name="dialog">
	<div class="grid grid-cols-6">
		{#each lines as { avatar, line, side }, index (index)}
			{#if avatar?.trim() !== ''}
				{#snippet avatarSnippet(mode: TalkMode)}
					<div>
						{#if mode === 'shutup'}
							🤐
						{:else}
							<img
								src="https://www.gravatar.com/avatar/{avatar}"
								class:shout={mode === 'shout'}
								alt={mode === 'talk' ? 'Person' : 'Person, shouting'}
							/>
						{/if}
					</div>
				{/snippet}
				<div class={side === 'left' ? 'col-start-1 col-end-6' : 'col-start-2 -col-end-1'}>
					<Bubble delay={500 + (lines[index - 1]?.line.length ?? 0) * 30} {side}>
						{#snippet avatar(mode: TalkMode)}
							{@render avatarSnippet(mode)}
						{/snippet}
						{line}
					</Bubble>
				</div>
			{:else}
				<div class={side === 'left' ? 'col-start-1 col-end-6' : 'col-start-2 -col-end-1'}>
					<Bubble delay={500 + (lines[index - 1]?.line.length ?? 0) * 30} {side}>
						{line}
					</Bubble>
				</div>
			{/if}
		{/each}
	</div>
</AnimationContext>

<style>
	img {
		border-radius: 50%;
		max-height: 1em;
		max-width: 1em;
	}

	.shout {
		border: 2px solid #f00;
		scale: 1.3;
	}
</style>

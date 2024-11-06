<script lang="ts">
	import AnimationContext from '$lib/common/bubble/AnimationContext.svelte';
	import Bubble, { type TalkMode } from '$lib/common/bubble/Bubble.svelte';

	interface Props {
		lines: { side: 'left' | 'right'; avatar?: string; line: string }[];
	}

	let { lines }: Props = $props();
</script>

<AnimationContext name="dialog">
	{#each lines as { avatar, line, side }}
		{#if avatar?.trim() !== ''}
			{#snippet avatarSnippet({ mode }: { mode: TalkMode })}
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
			<Bubble delay={500 + line.length * 30} {side} avatar={avatarSnippet}>
				{line}
			</Bubble>
		{:else}
			<Bubble delay={500 + line.length * 30} {side}>
				{line}
			</Bubble>
		{/if}
	{/each}
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

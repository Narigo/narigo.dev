<script lang="ts">
	import AnimationContext from '$lib/common/bubble/AnimationContext.svelte';
	import Bubble from '$lib/common/bubble/Bubble.svelte';

	export let lines: { side: 'left' | 'right'; avatar?: string; line: string }[];
</script>

<AnimationContext name="dialog">
	{#each lines as { avatar, line, side }}
		{#if avatar?.trim() !== ''}
			<Bubble delayNext={500 + line.length * 30} {side}>
				{line}
				<div slot="avatar" let:mode>
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
			</Bubble>
		{:else}
			<Bubble delayNext={500 + line.length * 30} {side}>
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

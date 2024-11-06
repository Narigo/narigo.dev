<script lang="ts" module>
	export type TalkMode = 'talk' | 'shutup' | 'shout';
</script>

<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { getContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import Shaker from '../Shaker.svelte';
	import type { AnimationContext } from './AnimationContext.svelte';

	interface Props {
		side?: 'left' | 'right';
		delay?: number | undefined;
		duration?: number;
		children?: import('svelte').Snippet;
		avatar?: import('svelte').Snippet<[{ mode: TalkMode }]>;
	}

	let { side = 'left', delay = undefined, duration = 1000, children, avatar }: Props = $props();

	const animationContext = getContext<AnimationContext>('AnimationContext');

	let angle = $state(Math.random() * 1.5 - 1.5 / 2);
	let translateX = $state(Math.random() * 5 - 5 / 2);
	const show = writable<boolean>(delay === 0 || animationContext === undefined);

	onMount(() => {
		if (animationContext) {
			animationContext.createAnimation(show, delay);
		}
	});

	const modes: Array<TalkMode> = [
		'talk',
		'shutup',
		'talk',
		'shutup',
		'talk',
		'shout',
		'talk',
		'shutup'
	];
	let mode = $state(0);

	const toggleTalking = () => {
		mode = (mode + 1) % modes.length;
		if (modes[mode] === 'talk') {
			angle = Math.random() * 1.5 - 1.5 / 2;
			translateX = Math.random() * 5 - 5 / 2;
		}
	};
</script>

{#if $show}
	<Shaker shake={modes[mode] === 'shout'}>
		<div
			class="relative min-h-12 rotate-[--angle]"
			class:shutup={modes[mode] === 'shutup'}
			class:left={side === 'left'}
			class:right={side === 'right'}
			style="--angle: {angle}deg; --x: {translateX}px;"
		>
			{#if modes[mode] === 'talk' || modes[mode] === 'shout'}
				<div
					class="bubble relative bg-white border-2 border-black text-base leading-8 my-2 mx-auto p-2 max-w-max translate-x-[--x] rounded-lg"
					class:ml-8={side === 'left'}
					class:mr-8={side === 'right'}
					transition:fly={{ x: (side === 'left' ? -1 : 1) * 50, duration }}
				>
					<div class="content">
						{@render children?.()}
					</div>
				</div>
			{/if}
			<button
				class="avatar absolute bg-transparent border-none bottom-3 cursor-pointer text-base"
				onclick={preventDefault(toggleTalking)}
			>
				{#if avatar}{@render avatar({
						mode: modes[mode]
					})}{:else if modes[mode] === 'talk'}🗣️{:else if modes[mode] === 'shout'}😱{:else}🤐{/if}
			</button>
		</div>
	</Shaker>
{/if}

<style>
	.content :global(:first-child) {
		margin-top: 0;
	}
	.content :global(:last-child) {
		margin-bottom: 0;
	}
	.bubble::before {
		position: absolute;
		box-sizing: border-box;
		width: 1em;
		height: 1em;
		content: '';
		border-top: 2px solid #000;
		border-right: 2px solid #000;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% + 1px), -1px 0);
		background: #fff;
		overflow: hidden;
		z-index: 0;
	}
	.left .bubble::before {
		transform: rotate(225deg);
		bottom: 0.8em;
		left: -0.5em;
	}
	.right .bubble::before {
		transform: scaleX(-1) rotate(225deg);
		bottom: 0.8em;
		right: -0.5em;
	}
	.left .avatar {
		left: 0;
	}
	.right .avatar {
		right: 0;
		transform: scaleX(-1);
	}
</style>

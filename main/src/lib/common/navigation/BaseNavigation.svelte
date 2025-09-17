<script lang="ts" module>
	let navigationCounter = 0;
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props {
		menuItems: (HTMLAnchorAttributes & { href: string; label: string })[];
		variant?: 'stretch' | undefined;
	}

	let { menuItems, variant = undefined }: Props = $props();

	let navigationId = ++navigationCounter;
	let isExpanded = $state(false);
</script>

<div class="font-comic mb-4 flex flex-col text-sm">
	<input id="navigation-menu-toggle-{navigationId}" type="checkbox" bind:checked={isExpanded} />
	<label
		class="bg-comic-primary hover:bg-comic-primary-light relative isolate flex flex-1 cursor-pointer px-4 py-2 text-white uppercase lg:hidden"
		for="navigation-menu-toggle-{navigationId}"
	>
		<div class="menu-icon"></div>
		<span class="opened">Open Menu</span>
		<span class="closed">Close Menu</span>
	</label>
	<nav class="contents">
		<ul
			class="flex flex-1 flex-col flex-nowrap items-stretch justify-between gap-x-2 p-0 {variant ===
			'stretch'
				? ''
				: 'lg:flex-row lg:flex-wrap'}"
		>
			{#each menuItems as { label, href, ...linkProps } (label)}
				<li class="relative isolate inline-flex flex-1">
					<a
						class="internal bg-comic-primary hover:bg-comic-primary-light m-0 flex flex-1 px-4 py-2 text-white no-underline hover:text-white"
						{href}
						{...linkProps}>{label}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	li::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.7);
		z-index: -1;
	}
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox'] ~ nav {
		display: none;
	}
	input[type='checkbox']:checked ~ nav {
		display: flex;
		flex-flow: column;
	}
	input[type='checkbox'] ~ label .closed {
		display: none;
	}
	input[type='checkbox'] ~ label .opened {
		display: inline;
	}
	input[type='checkbox']:checked ~ label .closed {
		display: inline;
	}
	input[type='checkbox']:checked ~ label .opened {
		display: none;
	}
	label::before {
		box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.7);
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	@media screen and (min-width: 1024px) {
		input[type='checkbox']:checked ~ nav,
		input[type='checkbox'] ~ nav {
			align-items: center;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
		}
		li {
			flex: unset;
		}
	}
</style>

<script lang="ts" context="module">
	let navigationCounter = 0;
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export let menuItems: (HTMLAnchorAttributes & { href: string; label: string })[];
	export let variant: '' | 'stretch' = '';

	let navigationId = ++navigationCounter;
	let isExpanded = false;
</script>

<div class="flex flex-col mb-4">
	<input id="navigation-menu-toggle-{navigationId}" type="checkbox" bind:checked={isExpanded} />
	<label class="uppercase" for="navigation-menu-toggle-{navigationId}">
		<div class="menu-icon" />
		<span class="opened">Open Menu</span>
		<span class="closed">Close Menu</span>
	</label>
	<nav class="contents">
		<ul
			class="flex items-stretch flex-1 gap-x-2 justify-between p-0 {variant === 'stretch'
				? 'flex-col flex-nowrap'
				: 'flex-row flex-wrap'}"
		>
			{#each menuItems as { label, href, ...linkProps }}
				<li class="relative inline-flex flex-1 isolate">
					<a
						class="bg-primary hover:bg-primary-light flex-1 text-white hover:text-white no-underline flex py-2 px-4 m-0"
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
	label {
		background: rgba(73, 153, 66, 1);
		cursor: pointer;
		color: #fff;
		display: flex;
		flex: 1;
		isolation: isolate;
		padding: 0.5em 1em;
		position: relative;
		text-decoration: none;
	}
	label:hover {
		background: rgba(101, 193, 96, 1);
	}
	label::before {
		box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.7);
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	@media screen and (min-width: 1000px) {
		label {
			display: none;
		}
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

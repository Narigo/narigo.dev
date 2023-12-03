<script>
	import { base } from '$app/paths';

	let isExpanded = false;
</script>

<div class="flex flex-col mb-4">
	<input id="navigation-menu-toggle" type="checkbox" bind:checked={isExpanded} />
	<label class="uppercase" for="navigation-menu-toggle">
		<div class="menu-icon" />
		<span class="opened">Open Menu</span>
		<span class="closed">Close Menu</span>
	</label>
	<nav class="contents">
		<ul class="flex items-stretch flex-1 flex-col flex-nowrap gap-x-2 justify-between p-0">
			<li><a href="{base}/">🏠 Home</a></li>
			<li><a href="{base}/articles">📝 Articles</a></li>
			<li><a href="{base}/talks">🗣️ Talks</a></li>
			<li><a href="{base}/specials">🤪 Specials</a></li>
			<li><a href="{base}/contact">🧑‍💼 Contact</a></li>
		</ul>
	</nav>
</div>

<style>
	li {
		position: relative;
		display: inline-flex;
		flex: 1;
		isolation: isolate;
		list-style-type: none;
	}
	a {
		background: rgba(73, 153, 66, 1);
		color: #fff;
		flex: 1;
		padding: 0.5em 1em;
		margin: 0;
		text-decoration: none;
	}
	li::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.7);
		z-index: -1;
	}
	a:hover {
		background: rgba(101, 193, 96, 1);
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
		nav ul {
			flex-flow: row wrap;
		}
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

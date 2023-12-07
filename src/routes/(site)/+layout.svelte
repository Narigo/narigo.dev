<div class="layout" style="display:contents">
	<slot />
</div>

<style lang="postcss">
	@import './fonts.css';

	:root {
		--color-primary-rgb: 64, 154, 69;
		--color-text: #000;
		--font-family-primary: 'Gochi Hand', cursive;
		--font-family-headline: 'Permanent Marker', 'Gochi Hand', cursive;
		--font-size-primary: 24px;

		--nd-box-shadow: 0.25rem 0.25rem 0 #555;

		--color-primary: rgb(var(--color-primary-rgb));
	}

	:global(html, body) {
		height: 100%;
		font-size: var(--font-size-primary);
		color: var(--color-text);
		margin: 0;
		padding: 0;
	}

	:where(.layout) :global(h1),
	:where(.layout) :global(h2),
	:where(.layout) :global(h3),
	:where(.layout) :global(h4),
	:where(.layout) :global(h5),
	:where(.layout) :global(h6) {
		background: var(--color-primary);
		box-shadow: var(--nd-box-shadow);
		clear: both;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-family-headline);
		isolation: isolate;
		padding: 0.5em 1em;
		margin: 0 0.5em 0.5em 0;
		max-width: max-content;
	}
	:where(.layout) :global(a) {
		@apply underline text-blue-900;
	}
	:where(.layout) :global(a:hover) {
		@apply no-underline text-blue-700;
	}
	:where(.layout) :global(a[rel~='external']::after) {
		position: relative;
		content: '';
		display: inline-flex;
		background: url('data:image/svg+xml,<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><text x="0" y="0" alignment-baseline="hanging" font-size="128">🛫</text></svg>')
			no-repeat;
		margin-left: 0.1em;
		vertical-align: middle;
		height: 1em;
		width: 1em;
	}

	:where(.layout) :global(code) {
		font-family: 'Victor Mono', monospace;
	}
</style>

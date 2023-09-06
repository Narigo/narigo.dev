<slot />

<style>
	@import './fonts.css';

	:root {
		--color-primary: #409a45;
		--color-text: #000;
		--font-family-primary: 'Gochi Hand', cursive;
		--font-family-headline: 'Permanent Marker', 'Gochi Hand', cursive;
		--font-size-primary: 24px;
	}

	:global(html, body) {
		height: 100%;
		font-size: var(--font-size-primary);
		color: var(--color-text);
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		background: var(--color-primary);
		box-shadow: 0.25rem 0.25rem 0 #555;
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
	:global(a[rel~='external']::after) {
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

	:global(code) {
		font-family: 'Victor Mono', monospace;
	}
</style>

<slot />

<style>
	@import './fonts.css';

	:root {
		--font-family-primary: 'Gochi Hand', cursive;
		--font-family-headline: 'Permanent Marker', 'Gochi Hand', cursive;
		--font-size-primary: 24px;
	}

	:global(html, body) {
		height: 100%;
		font-size: var(--font-size-primary);
		margin: 0;
		padding: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		background: rgba(0, 128, 0, 0.8);
		box-shadow: 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.7);
		clear: both;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-family-headline);
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
</style>

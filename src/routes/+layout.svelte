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
		box-shadow: 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.7);
		clear: both;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		font-family: var(--font-family-headline);
		padding: 0.5em 1em;
		margin: 0 0.5em 0.5em 0;
		max-width: max-content;
	}

	:global(p) {
		position: relative;
		background: linear-gradient(to bottom, #fff, #eeeeee);
		border-radius: 0.5rem;
		border: 2px solid #000;
		padding: 0.5em;
		font-size: 1em;
		line-height: 2em;
	}
	:global(p):nth-child(odd) {
		margin-left: 2em;
	}
	:global(p):nth-child(even) {
		margin-right: 2em;
	}
	:global(p)::before {
		position: absolute;
		box-sizing: border-box;
		width: 0.8em;
		height: 0.8em;
		content: '';
		border: 2px solid #000;
		background: #fff;
		border-color: #000 #000 transparent transparent;
		overflow: hidden;
		z-index: 0;
	}
	:global(p):nth-child(odd)::before {
		transform: rotate(225deg);
		bottom: 1em;
		left: -0.4em;
	}
	:global(p):nth-child(even)::before {
		transform: rotate(45deg);
		bottom: 1em;
		right: -0.4em;
	}
	:global(p)::after {
		position: absolute;
		content: '🗣️';
		bottom: 0.2em;
	}
	:global(p):nth-child(odd)::after {
		left: -2em;
	}
	:global(p):nth-child(even)::after {
		right: -2em;
		transform: scaleX(-1);
	}

</style>

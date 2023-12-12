<script>
	import { base } from '$app/paths';
	import BaseNavigation from './BaseNavigation.svelte';
</script>

<BaseNavigation
	menuItems={[
		{ href: `${base}/`, label: '🏠 Home' },
		{ href: `${base}/articles`, label: '📝 Articles' },
		{ href: `${base}/talks`, label: '🗣️ Talks' },
		{ href: `${base}/specials`, label: '🤪 Specials' },
		{ href: `${base}/contact`, label: '🧑‍💼 Contact' }
	]}
/>

<script>
	import { resolve } from '$app/paths';
	import BaseNavigation from './BaseNavigation.svelte';
</script>

<BaseNavigation
	menuItems={[
		{ href: resolve('/'), label: '🏠 Home' },
		{ href: resolve('/articles'), label: '📝 Articles' },
		{ href: resolve('/talks'), label: '🗣️ Talks' },
		{ href: `${resolve('/')}toolbox`, label: '🛠️ Toolbox', rel: 'external' },
		{ href: resolve('/specials'), label: '🤪 Specials' },
		{ href: resolve('/contact'), label: '🧑‍💼 Contact' }
	]}
/>

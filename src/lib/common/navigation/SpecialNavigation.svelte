<script>
	import { base } from '$app/paths';
	import BaseNavigation from './BaseNavigation.svelte';
</script>

<BaseNavigation
	menuItems={[
		{ href: `${base}/specials/crafters-vs-codewars`, label: 'Crafters vs Codewars' },
		{
			href: `${base}/specials/frontend-friday-folks`,
			label: 'Frontend Friday Folks fighting CSSBattle.dev'
		},
		{ href: `${base}/specials/ornaments`, label: 'Hang some ornaments' },
		{ href: `${base}/specials/recharge`, label: 'Recharge someone' },
		{ href: `${base}/specials/talking`, label: 'Talking / Dialog' },
		{ href: `${base}/specials/today-i-learnt`, label: 'Today I learnt' },
		{ href: `${base}/specials/weirdle`, label: 'Weirdle' }
	]}
	variant="stretch"
/>

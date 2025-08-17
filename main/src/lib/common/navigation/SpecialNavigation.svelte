<script>
	import { resolve } from '$app/paths';
	import BaseNavigation from './BaseNavigation.svelte';
</script>

<BaseNavigation
	menuItems={[
		{ href: resolve('/specials/car-wash'), label: 'Car Wash' },
		{ href: resolve('/specials/crafters-vs-codewars'), label: 'Crafters vs Codewars' },
		{
			href: resolve('/specials/frontend-friday-folks'),
			label: 'Frontend Friday Folks fighting CSSBattle.dev'
		},
		{ href: resolve('/specials/ornaments'), label: 'Hang some ornaments on a tree' },
		{ href: resolve('/specials/recharge'), label: 'Recharge someone' },
		{ href: resolve('/specials/talking'), label: 'Talking / Dialog' },
		{ href: resolve('/specials/today-i-learnt'), label: 'Today I learnt' },
		{ href: resolve('/specials/weirdle'), label: 'Weirdle' }
	]}
	variant="stretch"
/>

<script lang="ts">
	import { onMount } from 'svelte';

	type Ornament = {
		id: number;
		x: number;
		y: number;
		size: number;
		h: number;
		s: number;
		l: number;
		kind: 'circle' | 'star';
	};

	let ornaments = $state<Array<Ornament>>([]);
	let ornamentCount = 0;
	const createOrnament = ({ size, x, y }: { size: number; x: number; y: number }) => {
		ornamentCount = ornamentCount + 1;
		const h = Math.floor(Math.random() * 360);
		const s = Math.round(Math.random() * 50) + 50;
		const l = Math.round(Math.random() * 50) + 50;

		const kind: Ornament['kind'] = Math.random() >= 0.5 ? 'circle' : 'star';

		return {
			id: ornamentCount,
			x,
			y,
			size,
			h,
			s,
			l,
			kind
		};
	};

	let body: HTMLDivElement;
	let svg: SVGElement;

	onMount(() => {
		svg.addEventListener('click', (event) => {
			const size = Math.round(Math.random() * 50) + 20;
			const newOrnament = createOrnament({
				size: (size / body.offsetWidth) * 100,
				x: ((event.offsetX - size / 2) / body.offsetWidth) * 100,
				y: event.offsetY - 20
			});
			ornaments = [...ornaments, newOrnament];
		});
	});
</script>

<button
	onclick={() => {
		for (const div of document.querySelectorAll('.ornament')) {
			body.removeChild(div);
		}
	}}>reset</button
>
<div bind:this={body} class="relative">
	{#each ornaments as ornament, index (index)}
		<div
			style="position:absolute;top:{ornament.y}px;left:{ornament.x}%;width:{ornament.size}%;aspect-ratio:100/120;"
		>
			<svg
				version="1.1"
				style="width:100%"
				viewBox="0 -20 100 100"
				width="100"
				height="120"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="ornament-{index}" gradientTransform="rotate(70)">
						<stop offset="0%" stop-color="hsl({ornament.h}deg {ornament.s}% {ornament.l}%)" />
						<stop
							offset="100%"
							stop-color="hsl({ornament.h}deg {ornament.s}% {Math.round(ornament.l / 5)}%)"
						/>
					</linearGradient>
				</defs>
				<path d="M50 -20L50 0" stroke="gold" stroke-width="2" />
				{#if ornament.kind === 'circle'}
					<circle cx="50" cy="50" r="50" fill="url(#ornament-{ornament.id})" />
				{:else if ornament.kind === 'star'}
					<path
						d="M50 0L66 33H100L75 60L80 100L50 80L20 100L25 60L0 33H33L50 0Z"
						fill="url(#ornament-{ornament.id})"
					/>
				{/if}
			</svg>
		</div>
	{/each}
	<svg
		bind:this={svg}
		class="max-w-full"
		version="1.1"
		viewBox="0 0 1000 600"
		width="1000"
		height="600"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="tree-gradient" gradientTransform="rotate(90)">
				<stop offset="0%" stop-color="#cfc" />
				<stop offset="100%" stop-color="#393" />
			</linearGradient>
		</defs>
		<path d="M540 480 l0   80  c0 10, -80 10,-80  0 l0 -80 z" fill="brown" />
		<path d="M500 170 l300 280 c0 50,-600 50,-600 0 z" fill="url(#tree-gradient)" />
		<path d="M500 140 l250 230 c0 40,-500 40,-500 0 z" fill="url(#tree-gradient)" />
		<path d="M500 110 l200 180 c0 30,-400 30,-400 0 z" fill="url(#tree-gradient)" />
		<path d="M500 80  l150 130 c0 20,-300 20,-300 0 z" fill="url(#tree-gradient)" />
		<path d="M500 50  l100 80  c0 10,-200 10,-200 0 z" fill="url(#tree-gradient)" />
	</svg>
</div>

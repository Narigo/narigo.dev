<script lang="ts">
	type Ornament = {
		id: number;
		x: number;
		y: number;
		width: number;
		height: number;
		h: number;
		s: number;
		l: number;
		kind: 'circle' | 'star';
		isDragging: boolean;
	};

	let ornaments = $state<Array<Ornament>>([]);
	const getOrnamentId = (() => {
		let id = 0;
		return () => ++id;
	})();
	const createOrnament = ({
		width,
		height,
		x,
		y
	}: Pick<Ornament, 'width' | 'height' | 'x' | 'y'>): Ornament => {
		const h = Math.floor(Math.random() * 360);
		const s = Math.round(Math.random() * 50) + 50;
		const l = Math.round(Math.random() * 50) + 50;

		const kind: Ornament['kind'] = Math.random() >= 0.5 ? 'circle' : 'star';

		return {
			id: getOrnamentId(),
			x,
			y,
			width,
			height,
			h,
			s,
			l,
			kind,
			isDragging: false
		};
	};

	let body: HTMLDivElement;
	let svg: SVGElement;

	const pathClickHandler = (event: PointerEvent) => {
		const size = Math.round(Math.random() * 50) + 20;
		const newOrnament = createOrnament({
			width: (size / body.offsetWidth) * 100,
			height: (size / body.offsetWidth) * 240,
			x: event.offsetX - size / 2,
			y: event.offsetY
		});
		ornaments = [...ornaments, newOrnament];
	};
</script>

<button
	onclick={() => {
		ornaments = [];
	}}>reset</button
>
<div bind:this={body} class="relative">
	{#each ornaments as ornament (ornament.id)}
		<div
			class="absolute aspect-[100/120]"
			style="top:{ornament.y}px;left:{ornament.x}px;width:{ornament.width}%;height:{ornament.height}%;opacity:{ornament.isDragging
				? 0.5
				: 1};"
			draggable="true"
			ondragstart={(event) => {
				event.dataTransfer?.setData('text', `${ornament.id}`);
				ornament.isDragging = true;
				console.log('start: currentTarget.offsetLeft', event.currentTarget.offsetLeft);
				console.log('start: clientX', event.clientX);
				console.log('start: offsetX', event.offsetX);
			}}
			ondrag={(event) => {
				console.log('drag: currentTarget.offsetLeft', event.currentTarget.offsetLeft);
				console.log('drag: clientX', event.clientX);
				console.log('drag: offsetX', event.offsetX);
			}}
			ondragend={(event) => {
				event.preventDefault();
				console.log('end: currentTarget.offsetLeft', event.currentTarget.offsetLeft);
				console.log('end: clientX', event.clientX);
				console.log('end: offsetX', event.offsetX);
				ornament.x = event.clientX;
				ornament.y = event.clientY;
				ornament.isDragging = false;
			}}
			role="figure"
		>
			<svg
				version="1.1"
				style="width:100%;height:100%;"
				viewBox="0 -20 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="ornament-{ornament.id}-bg" gradientTransform="rotate(70)">
						<stop offset="0%" stop-color="hsl({ornament.h}deg {ornament.s}% {ornament.l}%)" />
						<stop
							offset="100%"
							stop-color="hsl({ornament.h}deg {ornament.s}% {Math.round(ornament.l / 5)}%)"
						/>
					</linearGradient>
				</defs>
				<path d="M50 -20L50 0" stroke="gold" stroke-width="2" />
				{#if ornament.kind === 'circle'}
					<circle cx="50" cy="50" r="50" fill="url(#ornament-{ornament.id}-bg)" />
				{:else if ornament.kind === 'star'}
					<path
						d="M50 0L66 33H100L75 60L80 100L50 80L20 100L25 60L0 33H33L50 0Z"
						fill="url(#ornament-{ornament.id}-bg)"
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
		<g onpointerup={pathClickHandler}>
			<path d="M500 170 l300 280 c0 50,-600 50,-600 0 z" fill="url(#tree-gradient)" />
			<path d="M500 140 l250 230 c0 40,-500 40,-500 0 z" fill="url(#tree-gradient)" />
			<path d="M500 110 l200 180 c0 30,-400 30,-400 0 z" fill="url(#tree-gradient)" />
			<path d="M500 80  l150 130 c0 20,-300 20,-300 0 z" fill="url(#tree-gradient)" />
			<path d="M500 50  l100 80  c0 10,-200 10,-200 0 z" fill="url(#tree-gradient)" />
		</g>
	</svg>
</div>

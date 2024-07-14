<script lang="ts">
	type Color = 'w' | 'r' | 'b' | 'o' | 'g' | 'y' | '_';
	type Face = [[Color, Color, Color], [Color, Color, Color], [Color, Color, Color]];
	export let top: Face;
	export let left: Face;
	export let right: Face;
	export let front: Face;
	export let back: Face;

	const f: Record<Color, string> = {
		w: 'bg-white',
		r: 'bg-red-300',
		b: 'bg-blue-300',
		o: 'bg-orange-300',
		g: 'bg-green-300',
		y: 'bg-yellow-300',
		_: 'bg-gray-600'
	};
</script>

<div class="grid grid-cols-3">

	<div></div>
	<div class="bg-black grid gap-2 rotate-180">
		{#each back as [c1, c2, c3]}
			<div class="grid grid-cols-3 gap-2">
				<div class="rounded aspect-square {f[c1]}"></div>
				<div class="rounded aspect-square {f[c2]}"></div>
				<div class="rounded aspect-square {f[c3]}"></div>
			</div>
		{/each}
	</div>
	<div></div>

	<div class="bg-black grid gap-2 rotate-90">
		{#each left as [c1, c2, c3]}
			<div class="grid grid-cols-3 gap-2">
				<div class="rounded aspect-square {f[c1]}"></div>
				<div class="rounded aspect-square {f[c2]}"></div>
				<div class="rounded aspect-square {f[c3]}"></div>
			</div>
		{/each}
	</div>

	<div class="bg-black grid gap-2">
		{#each top as [c1, c2, c3]}
			<div class="grid grid-cols-3 gap-2">
				<div class="rounded aspect-square {f[c1]}"></div>
				<div class="rounded aspect-square {f[c2]}"></div>
				<div class="rounded aspect-square {f[c3]}"></div>
			</div>
		{/each}
	</div>

	<div class="bg-black grid gap-2 -rotate-90">
		{#each right as [c1, c2, c3]}
			<div class="grid grid-cols-3 gap-2">
				<div class="rounded aspect-square {f[c1]}"></div>
				<div class="rounded aspect-square {f[c2]}"></div>
				<div class="rounded aspect-square {f[c3]}"></div>
			</div>
		{/each}
	</div>

	<div></div>
	<div class="bg-black grid gap-2">
		{#each front as [c1, c2, c3]}
			<div class="grid grid-cols-3 gap-2">
				<div class="rounded aspect-square {f[c1]}"></div>
				<div class="rounded aspect-square {f[c2]}"></div>
				<div class="rounded aspect-square {f[c3]}"></div>
			</div>
		{/each}
	</div>
	<div></div>
</div>

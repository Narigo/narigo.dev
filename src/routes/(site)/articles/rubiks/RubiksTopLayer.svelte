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

<div class="grid grid-cols-3 aspect-square w-full [font-size:clamp(1px,calc(calc(-360px*5/504+1px)_+_calc(5/504*100vw)),6px)]">
	<div></div>
	<div></div>
	<div></div>

	<div></div>
	<div class="relative [perspective-origin:50%_50%] [perspective:300px]">
		<div class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(180deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)] z-10">
			{#each back as [c1, c2, c3]}
				<div class="grid grid-cols-3 gap-[2em]">
					<div class="rounded aspect-square {f[c1]}"></div>
					<div class="rounded aspect-square {f[c2]}"></div>
					<div class="rounded aspect-square {f[c3]}"></div>
				</div>
			{/each}
		</div>

		<div class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(90deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)]">
			{#each left as [c1, c2, c3]}
				<div class="grid grid-cols-3 gap-[2em]">
					<div class="rounded aspect-square {f[c1]}"></div>
					<div class="rounded aspect-square {f[c2]}"></div>
					<div class="rounded aspect-square {f[c3]}"></div>
				</div>
			{/each}
		</div>

		<div class="absolute inset-0 bg-black grid gap-[2em] p-[1em]">
			{#each top as [c1, c2, c3]}
				<div class="grid grid-cols-3 gap-[2em]">
					<div class="rounded aspect-square {f[c1]}"></div>
					<div class="rounded aspect-square {f[c2]}"></div>
					<div class="rounded aspect-square {f[c3]}"></div>
				</div>
			{/each}
		</div>

		<div class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(-90deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)]">
			{#each right as [c1, c2, c3]}
				<div class="grid grid-cols-3 gap-[2em]">
					<div class="rounded aspect-square {f[c1]}"></div>
					<div class="rounded aspect-square {f[c2]}"></div>
					<div class="rounded aspect-square {f[c3]}"></div>
				</div>
			{/each}
		</div>

		<div class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:translateY(50%)_rotateX(-30deg)_translateY(50%)]">
			{#each front as [c1, c2, c3]}
				<div class="grid grid-cols-3 gap-[2em]">
					<div class="rounded aspect-square {f[c1]}"></div>
					<div class="rounded aspect-square {f[c2]}"></div>
					<div class="rounded aspect-square {f[c3]}"></div>
				</div>
			{/each}
		</div>
	</div>

	<div></div>
	<div></div>
	<div></div>
</div>

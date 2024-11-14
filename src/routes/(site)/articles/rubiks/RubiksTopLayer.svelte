<script lang="ts">
	type Color = 'w' | 'r' | 'b' | 'o' | 'g' | 'y' | '_';
	type Face3x3 = [[Color, Color, Color], [Color, Color, Color], [Color, Color, Color]];
	type Face4x4 = [
		[Color, Color, Color, Color],
		[Color, Color, Color, Color],
		[Color, Color, Color, Color],
		[Color, Color, Color, Color]
	];

	interface Props {
		top: Face3x3 | Face4x4;
		left: Face3x3 | Face4x4;
		right: Face3x3 | Face4x4;
		front: Face3x3 | Face4x4;
		back: Face3x3 | Face4x4;
	}

	let { top, left, right, front, back }: Props = $props();

	const is3x3 = [top, left, right, front, back].every(
		(faceRows) => faceRows.length === 3 && faceRows.every((column) => column.length === 3)
	);
	const is4x4 = [top, left, right, front, back].every(
		(faceRows) => faceRows.length === 4 && faceRows.every((column) => column.length === 4)
	);
	const isValid = is3x3 || is4x4;

	if (!isValid) {
		console.error('Invalid cube!!');
	}

	const f: Record<Color, string> = {
		w: 'bg-white',
		r: 'bg-red-400',
		b: 'bg-blue-400',
		o: 'bg-orange-400',
		g: 'bg-green-400',
		y: 'bg-yellow-300',
		_: 'bg-gray-600'
	};
</script>

{#if isValid}
	<div
		class="grid grid-cols-3 aspect-square w-full [font-size:clamp(1px,calc(calc(-360px*5/504+1px)_+_calc(5/504*100vw)),6px)]"
	>
		<div></div>
		<div></div>
		<div></div>

		<div></div>
		<div class="relative [perspective-origin:50%_50%] [perspective:300px]">
			<div
				class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(180deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)] z-10"
			>
				{#each back as [c1, c2, c3, c4]}
					<div class="grid grid-flow-col gap-[2em]">
						<div class="rounded aspect-square {f[c1]}"></div>
						<div class="rounded aspect-square {f[c2]}"></div>
						<div class="rounded aspect-square {f[c3]}"></div>
						{#if is4x4}<div class="rounded aspect-square {f[c4 ?? '_']}"></div>{/if}
					</div>
				{/each}
			</div>

			<div
				class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(90deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)]"
			>
				{#each left as [c1, c2, c3, c4]}
					<div class="grid grid-flow-col gap-[2em]">
						<div class="rounded aspect-square {f[c1]}"></div>
						<div class="rounded aspect-square {f[c2]}"></div>
						<div class="rounded aspect-square {f[c3]}"></div>
						{#if is4x4}<div class="rounded aspect-square {f[c4 ?? '_']}"></div>{/if}
					</div>
				{/each}
			</div>

			<div class="absolute inset-0 bg-black grid gap-[2em] p-[1em]">
				{#each top as [c1, c2, c3, c4]}
					<div class="grid grid-flow-col gap-[2em]">
						<div class="rounded aspect-square {f[c1]}"></div>
						<div class="rounded aspect-square {f[c2]}"></div>
						<div class="rounded aspect-square {f[c3]}"></div>
						{#if is4x4}<div class="rounded aspect-square {f[c4 ?? '_']}"></div>{/if}
					</div>
				{/each}
			</div>

			<div
				class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:rotate(-90deg)_translateY(50%)_rotateX(-30deg)_translateY(50%)]"
			>
				{#each right as [c1, c2, c3, c4]}
					<div class="grid grid-flow-col gap-[2em]">
						<div class="rounded aspect-square {f[c1]}"></div>
						<div class="rounded aspect-square {f[c2]}"></div>
						<div class="rounded aspect-square {f[c3]}"></div>
						{#if is4x4}<div class="rounded aspect-square {f[c4 ?? '_']}"></div>{/if}
					</div>
				{/each}
			</div>

			<div
				class="shadow-black shadow-2xl absolute inset-0 bg-black grid gap-[2em] p-[1em] [transform:translateY(50%)_rotateX(-30deg)_translateY(50%)]"
			>
				{#each front as [c1, c2, c3, c4]}
					<div class="grid grid-flow-col gap-[2em]">
						<div class="rounded aspect-square {f[c1]}"></div>
						<div class="rounded aspect-square {f[c2]}"></div>
						<div class="rounded aspect-square {f[c3]}"></div>
						{#if is4x4}<div class="rounded aspect-square {f[c4 ?? '_']}"></div>{/if}
					</div>
				{/each}
			</div>
		</div>

		<div></div>
		<div></div>
		<div></div>
	</div>
{:else}
	<div>Invalid cube...!</div>
{/if}

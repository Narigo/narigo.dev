<script lang="ts">
	export interface HumanProps {
		body: 'left' | 'right' | 'standing';
		
	}
	const { body }: HumanProps = $props();

	let bodyRotation = $state(0);
	if (body === 'left') {
		bodyRotation = 90;
	}
	if (body === 'right') {
		bodyRotation = -90;
	}
</script>

<section class="human relative h-48 w-48">
	<section
		class="torso relative top-7 h-16 w-14 rounded bg-green-400"
		style="transform: rotate({bodyRotation}deg);"
	>
		<section
			class="head absolute -top-7 left-1/2 h-6 w-6 -translate-x-1/2 rounded-md bg-orange-200"
		>
			<div class="neck absolute -bottom-2 left-1/2 h-2 w-4 -translate-x-1/2 bg-orange-300"></div>
		</section>
		<section class="leg-l absolute left-2 top-full origin-top">
			<div
				class="leg-ol absolute top-0 h-11 w-4 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200"
			>
				<div class="leg-ul absolute top-full h-11 w-4 origin-top bg-orange-200"></div>
			</div>
		</section>
		<section class="leg-r absolute right-6 top-full origin-top">
			<div
				class="leg-or absolute top-0 h-11 w-4 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200"
			>
				<div class="leg-ur absolute top-full h-11 w-4 origin-top bg-orange-200"></div>
			</div>
		</section>
		<section class="arm-l absolute left-0 top-1 origin-top">
			<div
				class="arm-ol h-9 w-3 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-25% to-orange-200"
			>
				<div class="arm-ul absolute top-full h-9 w-3 origin-top bg-orange-200"></div>
			</div>
		</section>
		<section class="arm-r absolute right-3 top-1 origin-top">
			<div
				class="arm-or absolute top-0 h-9 w-3 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200"
			>
				<div class="arm-ur absolute top-full h-9 w-3 origin-top bg-orange-200"></div>
			</div>
		</section>
	</section>
</section>

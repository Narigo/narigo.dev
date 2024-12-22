<script lang="ts">
	export interface HumanProps {
		body: 'left' | 'left-80' | 'right' | 'right-80' | 'standing';
		upperArmLeft: 'straight' | 'front' | 'side' | 'halfUp' | '8p';
		upperArmRight: 'straight' | 'front' | 'side' | 'halfUp' | 'up';
		forearmLeft: 'straight' | 'bendedX' | 'bendedLeft' | 'bendedRight';
		forearmRight: 'straight' | 'bendedX' | 'bendedLeft' | 'bendedRight';
	}
	const { body, forearmLeft, forearmRight, upperArmLeft, upperArmRight }: HumanProps = $props();

	let bodyClasses = $state('');
	let upperArmLeftClasses = $state('h-9');
	let upperArmRightClasses = $state('h-9');
	let forearmLeftClasses = $state('h-9');
	let forearmRightClasses = $state('h-9');
	if (body === 'left') {
		bodyClasses = 'rotate-[90deg]';
	}
	if (body === 'left-80') {
		bodyClasses = 'rotate-[80deg]';
	}
	if (body === 'right') {
		bodyClasses = 'rotate-[-90deg]';
	}
	if (body === 'right-80') {
		bodyClasses = 'rotate-[-80deg]';
	}
	if (forearmLeft === 'bendedX') {
		forearmLeftClasses = 'h-3';
	}
	if (forearmRight === 'bendedX') {
		forearmRightClasses = 'h-3';
	}
	if (upperArmLeft === 'straight') {
		upperArmLeftClasses = 'h-9';
	}
	if (upperArmRight === 'straight') {
		upperArmRightClasses = 'h-9';
	}
	if (upperArmLeft === 'halfUp') {
		upperArmLeftClasses = 'rotate-[225deg] h-9';
	}
	if (upperArmRight === 'halfUp') {
		upperArmRightClasses = 'rotate-[135deg] h-9';
	}
	if (upperArmLeft === 'up') {
		upperArmLeftClasses = 'rotate-[180deg] h-9';
	}
	if (upperArmRight === 'up') {
		upperArmRightClasses = 'rotate-[180deg] h-9';
	}
	if (upperArmLeft === 'side') {
		upperArmLeftClasses = 'rotate-[90deg] h-9';
	}
	if (upperArmRight === 'side') {
		upperArmRightClasses = 'rotate-[90deg] h-9';
	}
</script>

<section class="human relative h-48 w-48">
	<section class="torso relative top-7 h-16 w-14 rounded bg-green-400 {bodyClasses}">
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
		<section class="arm-r absolute left-0 top-1 origin-top">
			<div
				class="upperArm-r w-3 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-25% to-orange-200 {upperArmRightClasses}"
			>
				<div
					class="forearm-r absolute top-full w-3 origin-top bg-orange-200 {forearmRightClasses}"
				></div>
			</div>
		</section>
		<section class="arm-l absolute right-3 top-1 origin-top">
			<div
				class="upperArm-l absolute top-0 w-3 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200 {upperArmLeftClasses}"
			>
				<div
					class="forearm-l absolute top-full w-3 origin-top bg-orange-200 {forearmLeftClasses}"
				></div>
			</div>
		</section>
	</section>
</section>

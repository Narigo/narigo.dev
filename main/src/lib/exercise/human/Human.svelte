<script lang="ts">
	import {
		getBodyClasses,
		getForearmClasses,
		getUpperArmLeftClasses,
		getUpperArmRightClasses,
		getThighLeftClasses,
		getThighRightClasses,
		type BodyProps,
		type ThighProps,
		type ForearmProps,
		type UpperArmProps
	} from '$lib/exercise/human/getClasses';

	export interface HumanProps {
		body: BodyProps;
		upperArmLeft: UpperArmProps;
		upperArmRight: UpperArmProps;
		forearmLeft: ForearmProps;
		forearmRight: ForearmProps;
		thighLeft: ThighProps;
		thighRight: ThighProps;
	}
	const {
		body,
		forearmLeft,
		forearmRight,
		upperArmLeft,
		upperArmRight,
		thighLeft,
		thighRight
	}: HumanProps = $props();

	let bodyClasses = $state(getBodyClasses(body));
	let upperArmLeftClasses = $state(getUpperArmLeftClasses(upperArmLeft));
	let upperArmRightClasses = $state(getUpperArmRightClasses(upperArmRight));
	let forearmLeftClasses = $state(getForearmClasses(forearmLeft));
	let forearmRightClasses = $state(getForearmClasses(forearmRight));
	let thighLeftClasses = $state(getThighLeftClasses(thighLeft));
	let thighRightClasses = $state(getThighRightClasses(thighRight));
</script>

<section class="human relative h-48 w-48">
	<section class="torso relative top-7 h-16 w-14 rounded bg-green-400 {bodyClasses}">
		<section
			class="head absolute -top-7 left-1/2 h-6 w-6 -translate-x-1/2 rounded-md bg-orange-200"
		>
			<div class="neck absolute -bottom-2 left-1/2 h-2 w-4 -translate-x-1/2 bg-orange-300"></div>
		</section>
		<section class="leg-l absolute right-6 top-full origin-top">
			<div
				class="thighLeft absolute top-0 h-11 w-4 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200 {thighLeftClasses}"
			>
				<div class="leg-ul absolute top-full h-11 w-4 origin-top bg-orange-200"></div>
			</div>
		</section>
		<section class="leg-r absolute left-2 top-full origin-top">
			<div
				class="thighRight absolute top-0 h-11 w-4 origin-top bg-gradient-to-b from-green-400 via-orange-300 via-20% to-orange-200 {thighRightClasses}"
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

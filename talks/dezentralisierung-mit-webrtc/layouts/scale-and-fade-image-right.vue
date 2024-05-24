<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '@slidev/theme-default/layoutHelper';

const props = defineProps({
	from: {
		type: Number
	},
	current: {
		type: Number
	},
	to: {
		type: Number
	},
	imageStart: {
		type: String
	},
	imageEnd: {
		type: String
	},
	class: {
		type: String
	}
});

const styleStart = computed(() => handleBackground(props.imageStart, false));
const styleEnd = computed(() => handleBackground(props.imageEnd, false));
</script>

<template>
	<div class="grid grid-cols-2 h-full w-full auto-rows-fr">
		<div class="slidev-layout default" :class="props.class">
			<slot />
		</div>
		<div
			class="grid grid-place-items-center">
			<div
				class="pos-absolute inset-0"
				v-motion
				:style="styleStart"
				:src="props.imageStart"
				:initial="{ transform: `scale(${props.from})`, opacity: 0 }"
				:enter="{ transform: `scale(${props.current})`, opacity: 1 }"
				:leave="{ transform: `scale(${props.to})`, opacity: 1 }"
			></div>
			<div
				class="pos-absolute inset-0"
				v-motion
				:style="styleEnd"
				:src="props.imageEnd"
				:initial="{ opacity: 0 }"
				:enter="{ transition: { delay: 800, duration: 5000 }, opacity: 1 }"
				:leave="{ transition: { delay: 800, duration: 5000 }, opacity: 1 }"
			></div>
		</div>
	</div>
</template>

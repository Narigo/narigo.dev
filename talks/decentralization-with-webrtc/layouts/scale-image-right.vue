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
	image: {
		type: String
	},
	class: {
		type: String
	}
});

const style = computed(() => handleBackground(props.image, false));
</script>

<template>
	<div class="grid grid-cols-2 h-full w-full auto-rows-fr">
		<div class="slidev-layout default" :class="props.class">
			<slot />
		</div>
		<div
			class="grid grid-place-items-center"
			v-motion
			:style="style"
			:src="props.image"
			:initial="{ transform: `scale(${props.from})` }"
			:enter="{ transform: `scale(${props.current})` }"
			:leave="{ transform: `scale(${props.to})` }"
		></div>
	</div>
</template>

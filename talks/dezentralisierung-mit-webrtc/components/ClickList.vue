<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
	items: []
});

const items = ref(props.items);
</script>

<template>
	<ul class="m-0 p-0">
		<li
			v-for="(item, index) in items"
			v-click
			v-motion
			class="list-none [&&]:m-0 p-0"
			:initial="{ transform: 'translateX(100%)', opacity: 0 }"
			:enter="{ transform: 'translateX(0%)', opacity: 1 }"
			:leave="{ transition: { delay: index * 20 }, transform: 'translateX(-100%)', opacity: 0 }"
		>
			{{ item }}
		</li>
	</ul>
</template>

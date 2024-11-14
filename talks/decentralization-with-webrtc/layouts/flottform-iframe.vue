<template>
	<div class="grid grid-cols-4 h-full w-full auto-rows-fr">
		<div class="slidev-layout default">
			<slot />
		</div>
		<div class="grid-col-span-3 h-full w-full">
			<iframe
				class="h-full w-full"
				width="900"
				src="https://demo.flottform.io"
				title="Flottform demo"
			></iframe>
		</div>
	</div>
</template>

<style></style>

<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section>
	<slot name="title">
		{#if title}
			<h2>
				<div class="icon">
					📢
					<div class="-scale-x-100">🗣️</div>
				</div>
				<div>{title}</div>
				<div class="icon">
					🗣️
					<div class="-scale-x-100">📢</div>
				</div>
			</h2>
		{/if}
	</slot>
	<slot />
</section>

<style>
	h2 {
		align-items: center;
		animation: announcement 2s infinite;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
		margin: 0 auto 0.5em;
		text-align: center;
	}

	h2 div {
		display: inline-block;
	}

	@keyframes announcement {
		0% {
			rotate: 0deg;
			scale: 1;
		}
		25% {
			rotate: -2deg;
			scale: 1.05;
		}
		50% {
			rotate: 0deg;
			scale: 1;
		}
		75% {
			rotate: 2deg;
			scale: 1.05;
		}
		100% {
			rotate: 0deg;
			scale: 1;
		}
	}

	@media (prefers-reduced-motion) {
		h2 {
			animation: none;
		}
	}
</style>

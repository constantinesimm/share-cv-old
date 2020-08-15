<template>
	<div class="app-container">
		<main class="app-main__content" role="main">
			<slot />
		</main>
	</div>
</template>

<script>
	export default {
		name: 'DefaultLayout'
	}
</script>

<style lang="scss" scoped>
	.app-main__content {
		height: inherit;
		width: inherit;
	}
</style>
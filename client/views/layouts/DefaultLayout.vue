<template>
	<div class="app-container">
		<main class="app-content" role="main">
			<slot />
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.app-content {
		height: inherit;
		width: inherit;
	}
</style>
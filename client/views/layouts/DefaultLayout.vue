<template>
	<div class="app-container">
		<main class="app-content" role="main">
            <transition name="el-zoom-in-center" mode="out-in">
                <slot />
            </transition>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.app-content {
		height: inherit;
		width: inherit;
	}
</style>

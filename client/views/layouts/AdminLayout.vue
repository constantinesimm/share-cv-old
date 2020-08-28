<template>
  <el-container class="app-container">
    <app-header />

    <el-main class="app-content">
        <transition name="el-zoom-in-center" mode="out-in">
            <slot />
        </transition>
    </el-main>

    <app-footer />
  </el-container>
</template>

<script>
  import AppHeader from '@/components/app/AppHeader';
  import AppFooter from '@/components/app/AppFooter';

  export default {
    components: {
      AppHeader, AppFooter
    }
  }
</script>

<style lang="scss" scoped>
    .app-container {
        display: flex;
        flex-direction: column;
        align-items: inherit;

        .app-content {
          height: inherit;
        }
    }
</style>

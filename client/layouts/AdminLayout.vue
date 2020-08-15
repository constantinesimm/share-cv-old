<template>
  <el-container class="app-container">
    <app-header />

    <el-main class="app-main__content">
        <slot />
    </el-main>

    <app-footer />
  </el-container>
</template>

<script>
  import AppHeader from '@/components/partial/AppHeader';
  import AppFooter from '@/components/partial/AppFooter';

  export default {
    name: 'AdminLayout',
    components: {
      AppHeader, AppFooter
    }
  }
</script>

<style lang="scss" scoped>
    .app-container {
        display: flex;
        flex-direction: column;
    }
</style>
<template>
  <component id="app" :is="layout">
    <transition name="el-zoom-in-center" mode="out-in">
        <router-view />
    </transition>
  </component>
</template>

<script>
  export default {
    computed: {
      layout() {
        return `${ this.$route.meta.layout || 'default'}-layout`
      }
    }
  }
</script>
<style lang="scss" scoped>
  #app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

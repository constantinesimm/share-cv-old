<template>
  <el-footer class="app-footer">
    <div class="app-footer__copyrights">
      <span>{{ $t('copyright.copyText') }} <i class="far fa-copyright"></i> {{ new Date().getFullYear() }}</span>
      <el-tooltip :content="$t('tooltips.writeEmail')" placement="top">
        <el-link href="mailto:constantine.peschanov@gmail.com" :underline="false">{{ $t('copyright.author') }}.</el-link>
      </el-tooltip>
      <span>{{ $t('copyright.rightsText') }}.</span>
    </div>
  </el-footer>
</template>

<script>
  export default {
    name: 'AppFooter'
  }
</script>

<style lang="scss" scoped>
  .app-footer {
    display: flex;
    justify-content: center;
    align-items: center;

    .app-footer__copyrights {
      span {
        &:first-child {
          margin-right: 5px;
        }
        &:last-child {
          margin-left: 5px;
        }
      }
    }
  }
</style>
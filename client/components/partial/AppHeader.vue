<template>
  <el-header class="app-header">
    <div class="app-header__menu">
      <router-link class="app-header__brand" :to="`/${ $i18n.locale }`">
        <img class="app-header__brand-logo" :src="logo" />
        <span class="app-header__brand-title">Share CV</span>
      </router-link>
      <div class="app-header__nav">
        <el-link href="/create/cv" icon="fas fa-plus"> My info</el-link>
        <el-link href="/create/cv" icon="fas fa-plus"> Создать резюме</el-link>
        <el-link href="/view/cv" icon="fas fa-eye">Мои резюме</el-link>
      </div>
    </div>
    <div class="app-header__opts">
      <LanguageSelect />
      <el-button type="primary" size="mini" icon="fas fa-sign-out-alt" plain> {{ $t('buttons.logout') }}</el-button>
    </div>
  </el-header>
</template>

<script>
  import logotype from '../../../public/img/share-cv_logo.png';
  import LanguageSelect from '@/components/LanguageSelect';

  export default {
    name: 'AppHeader',
    components: {
      LanguageSelect
    },
    data() {
      return {
        logo: logotype
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .app-header__brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 5px;
        padding-right: 5px;
        border-right: 1px solid #909399;
        text-decoration: none;

        &-logo {
          height: 50px;
          width: 40px;
          margin-right: 5px;
        }

        &-title {
          font-size: 24px;
          font-weight: bold;
          color: #606266;
        }
      }

      .app-header__nav {
        .el-link {
          margin-right: 10px;
        }
      }
    }

    &__opts {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 10%
    }
  }
</style>
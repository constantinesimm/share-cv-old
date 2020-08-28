<template>
  <el-header class="app-header">
    <div class="app-header-menu">
      <router-link class="app-header-menu__link app-header-menu__brand" :to="'/admin'">
        <img class="app-header-menu__brand-logo" :src="logo" />
      </router-link>
      <div class="app-header-menu__nav">
        <el-link class="app-header-menu__nav-link" href="/create/cv" icon="fas fa-plus"> My info</el-link>
        <el-link class="app-header-menu__nav-link" href="/create/cv" icon="fas fa-plus"> Создать резюме</el-link>
        <el-link class="app-header-menu__nav-link" href="/view/cv" icon="fas fa-eye">Мои резюме</el-link>
      </div>
    </div>
    <div class="app-header-options">
      <LanguageSelect />
      <el-button @click="handleLogout" type="primary" size="mini" icon="fas fa-sign-out-alt" plain> {{ $t('buttons.logout') }}</el-button>
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
    },
    methods: {
        handleLogout() {
          const user = { email: this.$store.getters['auth/getUser'].email };

          this.$store.dispatch('auth/logout', user)
            .then(response => this.$message.success(response.message))
            .catch(error => this.$message.error(error.message))
            .finally(() => this.$router.push({ name: 'login-page' }));
        }
      }
  }
</script>

<style lang="scss" scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

    &-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__brand {
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
      }

      &__nav {
        &-link {
          margin-right: 10px;
        }
      }
    }

    &-options {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 10%
    }
  }
</style>
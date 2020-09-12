<template>
    <header class="app-header navbar fixed-top">
        <div class="navbar-left">
            <ToggleMenuButton />
            <el-tooltip :content="$t('header.change-locale')" effect="light">
                <el-dropdown class="navbar-left__lang-picker" trigger="click" @command="handleLocaleChange" placement="bottom-start">
                    <div>
                        <img :src="require(`@/assets/img/flags/${currentLocale}.png`)" width="20px" height="19px" />
                        <i class="fas fa-angle-down fa-lg"></i>
                    </div>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="en" style="display: flex; justify-content: start; align-items: center;font-family: 'Ubuntu', sans-serif;">
                            <img src="@/assets/img/flags/en.png" width="20px" height="19px" style="margin-right: 10px" /> English
                        </el-dropdown-item>
                        <el-dropdown-item command="ru" style="display: flex; justify-content: start; align-items: center;font-family: 'Ubuntu', sans-serif;">
                            <img src="@/assets/img/flags/ru.png" width="20px" height="19px" style="margin-right: 10px" />  Русский
                        </el-dropdown-item>
                        <el-dropdown-item command="uk" style="display: flex; justify-content: start; align-items: center;font-family: 'Ubuntu', sans-serif;">
                            <img src="@/assets/img/flags/uk.png" width="20px" height="19px" style="margin-right: 10px" />  Українська
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-tooltip>
        </div>
        <router-link class="navbar-logo" to="/app">
            <span class="navbar-logo__title hidden-sm-and-down">Share</span>
            <img class="navbar-logo__img" src="@/assets/img/share-logo.png" />
        </router-link>
        <div class="navbar-right">
            <div class="navbar-right__options">
                <el-badge class="navbar-right__options-notif" value="5" type="primary">
                    <i class="far fa-bell fa-lg"></i>
                </el-badge>
            </div>
            <div class="navbar-right__user">
                <el-dropdown trigger="click" @command="handleUserMenu">
                    <div class="navbar-right__user-menu" style="display: flex; align-items: center; cursor:pointer">
                        <div class="navbar-right__user-name hidden-sm-and-down" style="margin-right: 5px">Constantine Peschanov</div>
                        <el-avatar shape="circle" :size="40"></el-avatar>
                    </div>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="account" icon="far fa-user-circle" style="font-family: 'Ubuntu', sans-serif;">
                            {{ $t('header.account') }}
                        </el-dropdown-item>
                        <el-dropdown-item command="logout" divided icon="fas fa-sign-out-alt" style="font-family: 'Ubuntu', sans-serif;">
                            {{ $t('header.logout') }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </header>
</template>

<script>
    import { defaultLocale, suitableLocales } from '@/constants/config';
    import ToggleMenuButton from '@/components/ToggleMenuButton';

    export default {
        name: 'AppHeader',
        components: {
            ToggleMenuButton
        },
        data() {
            return {
                currentLocale: ''
            }
        },
        methods: {
            handleUserMenu(action) {
                action === 'account' ? this.$router.push('/user/account') : console.log('logout action')
            },
            loadAndSetLocale() {
                const vuexState = this.$store.getters['app/getCurrentLocale'];
                const localData = JSON.parse(localStorage.getItem('$app_sharecv')).app.currentLocale;

                this.currentLocale = (vuexState && suitableLocales.includes(vuexState)) ? vuexState :
                    (localData && suitableLocales.includes(localData)) ? localData : defaultLocale;

                this.$i18n.locale = this.currentLocale;
            },
            handleLocaleChange(locale) {
                this.currentLocale = locale;
                this.$i18n.locale = locale;
                this.$store.dispatch('app/changeLocale', locale)
            }
        },
        created() {
            this.loadAndSetLocale();
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 35px;
        background: #fff;
        height: 75px;
        width: calc(100% - 70px);
        box-shadow: 0 3px 30px #0000001a, 0 3px 20px #0000001a;

        &-left {
            width: 33%;
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;

            &__lang-picker {
                margin-left: 15px;
                cursor: pointer;
                padding: 7px 7px;
                border-radius: 5px;
                box-shadow: 0 1px 15px #00000040, 0 1px 6px #00000040;

                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    i {
                        margin-left: 5px;
                        color: #8f8f8f;
                    }
                }
            }
        }

        &-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 33%;
            color: #409EFF;
            text-decoration: none;

            &:visited {
                color: #409EFF;
            }

            &__title {
                font-size: 36px;
                font-weight: 500;
                font-style: italic;
                margin-right: 5px;
            }

            &__img {
                width: 55px;
                height: 60px;
            }
        }

        &-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 33%;

            &__options {
                margin-right: 15px;
                margin-top: 7px;

                .el-badge {
                    cursor: pointer;

                    i {
                        color: #8f8f8f;
                    }
                }
            }

            &__user {
                margin-left: 10px;

                .el-dropdown {
                    .navbar-left__user-menu {
                        .navbar-right__user-name {
                            font-size: 14px;
                            color: #8f8f8f;
                            padding: 0 5px;
                        }
                    }
                }
            }
        }
    }

    .fixed-top {
        position: fixed;
        top: 0;
        z-index: 1030;
    }
</style>

<template>
    <transition name="fade">
        <div class="app-sidebar">
            <nav class="main-menu nav-menu">
                <div class="nav-menu__item">
                    <router-link class="nav-menu__item-link" to="/app/dashboard">
                        <i class="fas fa-desktop fa-2x"></i>
                        <span class="nav-menu__item-title"> {{ $t('sidebar.dashboard') }} </span>
                    </router-link>
                </div>
                <div class="nav-menu__item">
                    <router-link class="nav-menu__item-link" to="/app/analytics">
                        <i class="fas fa-chart-pie fa-2x"></i>
                        <span class="nav-menu__item-title"> {{ $t('sidebar.analytics') }} </span>
                    </router-link>
                </div>
                <div class="nav-menu__item">
                    <router-link class="nav-menu__item-link" to="/app/cv-list">
                        <i class="far fa-file-pdf fa-2x"></i>
                        <span class="nav-menu__item-title"> {{ $t('sidebar.cv') }} </span>
                    </router-link>
                </div>
                <div class="nav-menu__item">
                    <router-link class="nav-menu__item-link" to="/app/cv-data">
                        <i class="far fa-address-card fa-2x"></i>
                        <span class="nav-menu__item-title"> {{ $t('sidebar.information') }} </span>
                    </router-link>
                </div>

            </nav>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style lang="scss" scoped>
    .app-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 85px;
        height: calc(100% - 85px);
        width: 125px;
        z-index: 4;

        .nav-menu {
            width: 150px;
            height: calc(100% - 107px);
            background: #fff;
            z-index: 3;
            position: fixed;
            padding-top: 10px;
            padding-bottom: 10px;
            left: 0;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            box-shadow: 0 3px 30px #0000001a, 0 3px 20px #0000001a;

            &__item {
                height: 100px;
                border-bottom: 1px solid #d7d7d785;

                &-link {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #409EFF;
                    text-decoration: none;

                    &.is-active-page {
                        :after {
                            content: " ";
                            background: #008ecc;
                            border-radius: 10px;
                            position: absolute;
                            width: 6px;
                            height: 50px;
                            -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                            left: 0;
                            margin-top: 10px;
                        }
                    }

                    &:hover {
                        opacity: .7;
                    }

                    i {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
        transition-timing-function: ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0
    }
</style>

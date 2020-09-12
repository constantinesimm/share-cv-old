<template>
    <div class="app-container">
        <AppHeader />
        <AppSideBar v-show="sidebarVisible"/>
        <transition name="el-zoom-in-center">
            <main :class="['app-content', { 'app-sidebar__hidden': !sidebarVisible }]" role="main">
                <slot />
            </main>
        </transition>
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from '@/components/core/AppHeader';
    import AppSideBar from '@/components/core/AppSideBar';
    import AppFooter from '@/components/core/AppFooter';

    export default {
        name: 'AppLayout',
        components: {
            AppHeader, AppSideBar, AppFooter
        },
        data() {
            return {
                sidebarVisible: true
            }
        },
        created() {
            this.$eventHub.$on('toggle-sidebar', this.toggleSidebar)
        },
        beforeDestroy() {
            this.$eventHub.$off('toggle-sidebar')
        },
        methods: {
            toggleSidebar() {
                this.sidebarVisible = !this.sidebarVisible
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
        height: 100vh;

        .app-content {
            display: block;
            height: calc(100% - 185px);
            padding: 145px 60px 40px 200px;

            &.app-sidebar__hidden {
                padding-left: 60px;
            }
        }
    }
</style>

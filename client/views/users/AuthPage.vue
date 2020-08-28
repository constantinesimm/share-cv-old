<template>
    <section class="auth-page-container">
        <el-row class="auth-page-row">
            <el-col class="auth-page-col">
                <AuthCard :form-type="this.$route.meta.pageType"/>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import AuthCard from '@/components/admin-auth/AuthCard';

    export default {
        name: 'AuthPage',
        components: {
            AuthCard
        }
    }
</script>

<style lang="scss" scoped>
    .auth-page-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;

        .auth-page-row {
            .auth-page-col {

            }
        }
    }
</style>
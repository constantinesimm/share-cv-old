<template>
    <section class="auth-page__container">
        <el-row class="auth-page__row">
            <el-col class="auth-page__col">
                <AuthCard :form-type="this.$route.meta.pageType"/>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import AuthCard from '@/components/auth-card/AuthCard';

    export default {
        name: 'AuthPage',
        components: {
            AuthCard
        }
    }
</script>

<style lang="scss" scoped>
    .auth-page__container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;

        .auth-page__row {
            .auth-page__col {

            }
        }
    }
</style>
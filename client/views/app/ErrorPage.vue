<template>
    <div class="app-error-page fixed-background">
        <ImageFormCard :image-text="$t('card.error.image-side-text')">
            <slot name="default">
                <div class="form-side-body__message"> {{ $t('card.error.form-side-msg') }}</div>
                <div class="form-side-body__codeText">{{  $t('card.error.form-side-codeText') }}</div>
                <div class="form-side-body__code">404</div>
            </slot>
            <router-link to="/app" class="el-button el-button--primary is-round">
                {{ $t('card.error.form-side-return-btn') }}
            </router-link>
        </ImageFormCard>
    </div>
</template>

<script>
    import ImageFormCard from '@/components/ImageFormCard';

    export default {
        name: 'ErrorPage',
        components: {
            ImageFormCard
        }
    }
</script>

<style lang="scss" scoped>
    .app-error-page {
        display: flex;
        justify-content: center;
        align-items: center;

        &.fixed-background {
            background: url('../../assets/img/background-img.jpeg');
            background-size: cover;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
    .form-side-body__message {
        font-size: 20px;
        margin-bottom: 50px;
    }
    .form-side-body__codeText {
        color: #909090;
    }
    .form-side-body__code {
        font-size: 136px;
        margin-bottom: 50px;
    }
    .el-button {
        text-decoration: none;
    }
</style>

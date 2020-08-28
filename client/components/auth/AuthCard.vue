<template>
    <transition name="el-zoom-in-center" mode="out-in">
        <div class="auth-card">

            <div class="auth-card-header">
                <div class="auth-card-header__title">{{ $t(`forms.titles.${ formType }`) }}</div>
            </div>

            <div class="auth-card-body">
                <img class="auth-card-body__logo" src="../../../public/img/share-cv_logo.png" />
                <LoginForm v-show="isLoginPage" ref="loginForm" />
                <RegisterForm v-show="isRegisterPage" ref="registerForm" />
                <VerifyForm v-show="isVerifyPage" ref="verifyForm" />
            </div>

            <div class="auth-card-footer">
                <el-link v-show="isLoginPage" :href="`/users/register`" icon="fas fa-user-plus">{{ $t('links.registerPage') }}</el-link>
                <el-link v-show="isRegisterPage" :href="`/users/login`" icon="fas fa-sign-in-alt">{{ $t('links.loginPage') }}</el-link>
                <el-button type="info" plain round size="mini" @click="toggleModalState" icon="far fa-life-ring"> {{ $t('buttons.restorePasswordModal') }}</el-button>
            </div>

            <ForgotPasswordModal :modal-state="isModalVisible" @hide-modal="toggleModalState"/>
        </div>
    </transition>
</template>

<script>
    import LoginForm from '@/components/auth/LoginForm';
    import RegisterForm from '@/components/auth/RegisterForm';
    import VerifyForm from '@/components/auth/VerifyForm';
    import ForgotPasswordModal from '@/components/auth/ForgotPasswordModal';

    export default {
        name: 'AuthCard',
        components: {
            LoginForm, RegisterForm, VerifyForm, ForgotPasswordModal
        },
        props: {
            formType: {
                type: String,
                validator: (type) => ['login', 'register', 'verify'].includes(type)
            }
        },
        data() {
            return {
                form: null,
                isModalVisible: false
            }
        },
        computed: {
            isLoginPage () {
                return this.formType === 'login'
            },
            isRegisterPage () {
                return this.formType === 'register'
            },
            isVerifyPage() {
                return this.formType === 'verify'
            }
        },
        methods: {
            toggleModalState() {
                this.isModalVisible = !this.isModalVisible
            }
        }
    }
</script>

<style lang="scss" scoped>
    .auth-card {
        min-width: 300px;
        max-width: 350px;
        border-radius: 10px;
        background: #ffffff;
        border: 1px solid #ebeef5;
        overflow: hidden;
        color: #303133;
        transition: .3s;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

        &-header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            border-bottom: 1px solid #ebeef5;
            box-shadow: inset 0 4px 0 0 #409EFF;

            &__title {
                font-size: 26px;
                font-weight: bold;
                color: #606266;
            }
        }
        &-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px 20px;

            &__logo {
                width: 55px;
                height: 75px!important;
                padding-bottom: 15px;
            }
        }
        &-footer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 15px;
            border-top: 1px solid #ebeef5;

            button {
                margin-top: 10px;
            }
        }
    }
</style>

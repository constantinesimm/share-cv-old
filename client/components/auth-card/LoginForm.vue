<template>
    <el-form class="auth-form__login" :model="loginForm" ref="loginForm" size="mini">
        <el-form-item :label="$t('forms.emailField.label')" prop="email">
            <el-input :model="loginForm.email" size="mini" :placeholder="$t('forms.emailField.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('forms.secretField.label')" prop="secret">
            <el-input v-model="loginForm.secret" size="mini" :placeholder="$t('forms.secretField.placeholder')" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" round plain size="mini" icon="fas fa-sign-in-alt"> {{ $t('buttons.loginSubmit') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'LoginForm',
        data() {
            return {
                loginForm: {
                    email: null,
                    secret: null
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .auth-form__login {
        width: 100%;

        .el-form-item:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
        }
    }
</style>
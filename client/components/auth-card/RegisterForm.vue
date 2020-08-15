<template>
    <el-form class="auth-form__register" :model="registerForm" ref="registerForm" size="mini">
        <el-form-item :label="$t('forms.emailField.label')" prop="email">
            <el-input v-model="registerForm.email" size="mini" :placeholder="$t('forms.emailField.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('forms.secretField.label')" prop="secret">
            <el-input v-model="registerForm.secret" size="mini" :placeholder="$t('forms.secretField.placeholder')" />
        </el-form-item>
        <el-form-item :label="$t('forms.confirmSecretField.label')" prop="confirmSecret">
            <el-input v-model="registerForm.confirmSecret" size="mini" :placeholder="$t('forms.confirmSecretField.placeholder')" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" round plain size="mini" icon="fas fa-sign-in-alt"> {{ $t('buttons.registerSubmit') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: 'RegisterForm',
    data() {
        return {
            registerForm: {
                email: null,
                secret: null,
                confirmSecret: null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .auth-form__register {
        width: 100%;

        .el-form-item:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
        }
    }
</style>
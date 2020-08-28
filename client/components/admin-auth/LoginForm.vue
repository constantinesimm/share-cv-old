<template>
    <el-form class="login-form" :model="form" ref="form" :rules="rules" size="mini">
        <el-form-item :label="$t('forms.emailField.label')" prop="email">
            <el-input v-model="form.email" prefix-icon="far fa-envelope" :placeholder="$t('forms.emailField.placeholder')" size="mini" />
        </el-form-item>
        <el-form-item :label="$t('forms.secretField.label')" prop="secret">
            <el-input v-model="form.secret" prefix-icon="fas fa-key" show-password :placeholder="$t('forms.secretField.placeholder')" size="mini"/>
        </el-form-item>
        <el-form-item>
            <el-button @click="validateAndSubmitForm" :loading="isSubmitLoading" type="primary" round plain size="mini" icon="fas fa-sign-in-alt"> {{ $t('buttons.loginSubmit') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import validateRules from '@/plugins/validate';
    import validateForm from '@/mixins/ValidateForm';

    export default {
        name: 'LoginForm',
        mixins: [validateForm],
        data() {
            return {
                rules: {
                    email: validateRules.email,
                    secret: validateRules.secret
                },
                form: {
                    email: null,
                    secret: null
                },
                isSubmitLoading: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmitLoading = true;

                this.$store
                    .dispatch('auth/login', this.form)
                    .then(response => {})
                    .catch(error => this.$message.error(error.message))
                    .finally(() => this.isSubmitLoading = false)
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-form {
        width: 100%;

        .el-form-item:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
        }
    }
</style>
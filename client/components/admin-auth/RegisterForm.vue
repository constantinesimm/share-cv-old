<template>
    <el-form class="register-form" :model="form" ref="form" :rules="rules" size="mini">
        <el-form-item :label="$t('forms.emailField.label')" prop="email">
            <el-input v-model="form.email" prefix-icon="far fa-envelope" :placeholder="$t('forms.emailField.placeholder')" size="mini" />
        </el-form-item>
        <el-form-item :label="$t('forms.secretField.label')" prop="secret">
            <el-input v-model="form.secret" prefix-icon="fas fa-key" :placeholder="$t('forms.secretField.placeholder')" size="mini" />
        </el-form-item>
        <el-form-item :label="$t('forms.confirmSecretField.label')" prop="confirmSecret">
            <el-input v-model="form.confirmSecret" prefix-icon="fas fa-key" :placeholder="$t('forms.confirmSecretField.placeholder')" size="mini" />
        </el-form-item>
        <el-form-item>
            <el-button @click="validateAndSubmitForm" :loading="isSubmitLoading" type="primary" round plain size="mini" icon="fas fa-sign-in-alt"> {{ $t('buttons.registerSubmit') }}</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import { i18n } from '@/plugins/i18n';
    import validateRules from '@/plugins/validate';
    import validateForm from '@/mixins/ValidateForm';

    export default {
        name: 'RegisterForm',
        mixins: [validateForm],
        data() {
            const comparePasswordsRule = (rule, value, callback) => {
				return value === this.form.secret ? callback() : callback(i18n.t('validator.pass.match'))
            };
            
            return {
                rules: {
                    email: validateRules.email,
                    secret: validateRules.secret,
                    confirmSecret: [
						{ required: true, message: i18n.t('validator.pass.requireMatch') },
						{ validator: comparePasswordsRule }
					],
                },
                form: {
                    email: null,
                    secret: null,
                    confirmSecret: null
                },
                isSubmitLoading: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmitLoading = true;

            this.$store
                .dispatch('auth/register', this.form)
                .then(response => this.$message.success(response.message))
                .catch(error => this.$message.error(error.message))
                .finally(() => this.isSubmitLoading = false)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .register-form {
        width: 100%;

        .el-form-item:last-child {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
        }
    }
</style>
<template>
    <el-dialog :visible.sync="modalState" :before-close="hideModal"
               :close-on-click-modal="false" :close-on-press-escape="false"
               custom-class="auth-modal" width="450px">

        <span slot="title" class="modal-header">
            {{ $t('forms.titles.restorePassword') }}
        </span>

        <el-form :model="form" ref="form" :rules="rules" size="mini">
            <el-form-item :label="$t('forms.emailField.label')" prop="email">
                <el-input v-model="form.email" prefix-icon="far fa-envelope" :placeholder="$t('forms.emailField.placeholder')" size="mini"/>
            </el-form-item>
        </el-form>

        <span slot="footer">
            <el-button @click="hideModal" type="danger" size="mini" icon="fas fa-times" plain round> {{ $t('buttons.cancel') }}</el-button>
            <el-button @click="validateAndSubmitForm" :loading="isSubmitLoading" type="success" icon="fas fa-check" size="mini">
                {{ $t('buttons.restorePasswordSubmit') }}
            </el-button>
        </span>
    </el-dialog>
</template>

<script>
import validateRules from '@/plugins/validate';
import ValidateForm from '@/mixins/ValidateForm';

export default {
    name: 'ForgotPasswordModal',
    props: {
        modalState: {
            type: Boolean,
            default: false
        }
    },
    mixins: [ValidateForm],
    data() {
        return {
            rules: {
                email: validateRules.email
            },
            form: {
                email: null
            },
            isSubmitLoading: false
        }
    },
    methods: {
        hideModal() {
            this.resetValidate();
            this.$emit('hide-modal', true);
        },
        submitForm() {
            this.isFormSubmited = true;

            this.$store
                .dispatch('auth/passRecovery', this.form)
                .then(response => {
                    this.$message.success(response);
                    this.hideModal();
                })
                .catch(error => this.$message.error(error.message))
                .finally(() => this.isSubmitLoading = false)
        }
    }
}
</script>
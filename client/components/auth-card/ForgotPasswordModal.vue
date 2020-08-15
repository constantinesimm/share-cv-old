<template>
    <el-dialog :visible.sync="modalState"
               :before-close="hideModal"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               custom-class="auth-modal"
               width="450px"
    >
        <span slot="title" class="modal-header">
            {{ $t('forms.titles.restorePassword') }}
        </span>

        <el-form :model="forgotPasswordForm" ref="forgotPasswordForm" size="mini">
            <el-form-item :label="$t('forms.emailField.label')" prop="email">
                <el-input :model="forgotPasswordForm.email"  :placeholder="$t('forms.emailField.placeholder')" size="mini"/>
            </el-form-item>
        </el-form>

        <span slot="footer">
            <el-button @click="hideModal" type="danger" size="mini" icon="fas fa-times" plain round> {{ $t('buttons.cancel') }}</el-button>
            <el-button @click="" type="success" size="mini" icon="fas fa-check" plain round> {{ $t('buttons.restorePasswordSubmit') }}</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    name: 'ForgotPasswordModal',
    props: {
        modalState: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            forgotPasswordForm: {
                email: null
            }
        }
    },
    methods: {
        hideModal() {
            this.$emit('hide-modal', true);
        }
    }
}
</script>
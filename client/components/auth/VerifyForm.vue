<template>
    <el-form class="verify-form" size="mini">
        <div class="verify-form-block">
             <div class="verify-form-block__title content-success">
                Email verification success!
            </div>

            <sweetalert-icon class="verify-form-block__icon" icon="success" />

            <div class="verify-form-block__content content-success">
                Your account activated!
            </div>
        </div>

        <div class="verify-form-block">
            <div class="verify-form-block__title content-error">
                Email verification error!
            </div>

            <sweetalert-icon class="verify-form-block__icon" icon="error" />

            <div class="verify-form-block__content content-error">
                Invalid service token!
            </div>
        </div>
    </el-form>
</template>

<script>
    export default {
        name: 'VerifyForm',
        data() {
            return {
                key: null
            }
        },
        beforeCreate() {
            this.key = this.$route.query.key;
            console.log(this.$route.query.key);
        }
    }
</script>

<style lang="scss" scoped>
    .verify-form {
        width: 100%;

        &-block {
            &__title, &__content {
                font-size: 21px;
                font-weight: 500;
                text-align: center;
            }
            
            &__icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .content {
        &-success {
            color: #a5dc86;
        }
        &-error {
            color: #f27474;
        }
    }
</style>
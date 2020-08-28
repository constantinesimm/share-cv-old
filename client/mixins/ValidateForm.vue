<script>
    export default {
        methods: {
            validateAndSubmitForm() {
                return this.$refs.form.validate(valid => {
                    if (valid) this.submitForm();
                    else return false;
                })
            },
            resetValidate() {
                return this.$refs.form.resetFields();
            }
        }
    }
</script>
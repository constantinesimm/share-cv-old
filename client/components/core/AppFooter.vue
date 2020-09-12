<template>
    <footer class="app-footer hidden-xs-only">
        <div class="app-footer-content">
            <div class="app-footer-content__copyright">{{ $t('footer.copyright') }}, {{ new Date().getFullYear() }}</div>
            <div class="app-footer-content__contact">
                <a href="mailto:constantine.peschanov@gmail.com">
                    <i class="far fa-envelope"></i>
                    {{ $t('footer.contact-link') }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
name: "AppFooter"
}
</script>

<style lang="scss" scoped>
    .app-footer {
        position: fixed;
        bottom: 0;
        width: calc(100% - 275px);
        padding: 25px 75px 25px 200px;
        border-top: 1px solid #d7d7d7;

        &-content {
            display: flex;
            justify-content: space-between;
            color: #8f8f8f;

            &__contact {
                a {
                    color: #8f8f8f;
                    text-decoration: none;

                    &:hover {
                        color: #409EFF;
                    }
                }
            }
        }
    }
</style>

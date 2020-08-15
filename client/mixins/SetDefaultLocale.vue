<script>
    import Locale from '@/libs/i18n/locale';

    export default {
        name: 'SetDefaultLocale',
        mounted() {
            const routeLocale = this.$route.params.lang;

            if (routeLocale) {
                this.$i18n.locale = routeLocale;
                this.currentLang = routeLocale;
            }
        },
        computed: {
            currentLocale() {
                return Locale.filterLocale(this.languages, this.$i18n.locale);
            }
        },
        methods: {
            changeLocale(lang) {
                const { fullPath, params } = this.$route;
                const newPath = Locale.changeRouteToNewLocale(fullPath, params.lang, lang.value);

                this.currentLang = lang.value;
                this.$i18n.locale = lang.value;

                return this.$router.push(newPath);
            }
        }

    }
</script>
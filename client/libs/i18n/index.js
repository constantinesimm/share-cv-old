import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enUI from 'element-ui/lib/locale/lang/en';
import ukUI from 'element-ui/lib/locale/lang/ua';
import ruUI from 'element-ui/lib/locale/lang/ru-RU';

import enLocale from "./locale/en";
import ukLocale from "./locale/uk";
import ruLocale from "./locale/ru";

Vue.use(VueI18n);

const defaultLocale = 'en';

const messages = {
    en: Object.assign(enLocale, enUI),
    uk: Object.assign(ukLocale, ukUI),
    ru: Object.assign(ruLocale, ruUI),
}

const i18n = new VueI18n({
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
});

export { i18n, defaultLocale };


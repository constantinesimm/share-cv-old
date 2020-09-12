import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/store';

import enMsg from '../locales/en.json';
import ukMsg from '../locales/uk.json';
import ruMsg from '../locales/ru.json';
import { defaultLocale } from '@/constants/config';

const messages = {
    en: enMsg,
    uk: ukMsg,
    ru: ruMsg
};

const suitableLocales = ['en', 'uk', 'ru'];
const vuexState = store.getters['app/getCurrentLocale'];
const localData = JSON.parse(localStorage.getItem('$app_sharecv')).app.currentLanguage;

Vue.use(VueI18n);

const locale = (vuexState && suitableLocales.includes(vuexState)) ? vuexState :
    (localData && suitableLocales.includes(localData)) ? localData : defaultLocale;

console.log(`storeLang - ${vuexState}\n lsLang - ${localData}\n msg - ${JSON.stringify(messages)}`)

export default new VueI18n({
    locale: locale,
    fallbackLocale: defaultLocale,
    messages
});

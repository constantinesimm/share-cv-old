const enMsg = require('./locales/en');
const ukMsg = require('./locales/uk');
const ruMsg = require('./locales/ru');

const locales = {
    en: enMsg,
    uk: ukMsg,
    ru: ruMsg
};

module.exports = (lang) => locales[lang];
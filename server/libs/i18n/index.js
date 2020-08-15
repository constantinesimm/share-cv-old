const messages = {
    en: require('./locales/en'),
    uk: require('./locales/uk'),
    ru: require('./locales/ru')
};

module.exports = (lang) => messages[lang];
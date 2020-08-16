const messages = {
    en: require('./locales/en'),
    uk: require('./locales/uk'),
    ru: require('./locales/ru')
};

module.exports = (request) => {
    const language = request.header('accept-language') || process.env.DEFAULT_LOCALE;

    return {
        lang: language,
        messages: messages[language]
    };
}
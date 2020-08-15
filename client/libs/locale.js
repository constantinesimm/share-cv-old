class Locale {
    static checkRouteParam(lang) {
        return !['en','uk', 'ru'].includes(lang);
    }

    static checkCurrentLocale(currentLang, newLang) {
        return currentLang === newLang
    }

    static setLangAttribute(locale) {
        return document.querySelector('html').lang = locale
    }

    static changeRouteToDefaultLocale(path, lang) {
        return path.replace(`${ lang }`, 'en')
    }

    static changeRouteToNewLocale(path, oldLocale, newLocale) {
        return path.replace(`${oldLocale}`, `${newLocale}`);
    }

    static filterLocale(arr, locale) {
        return arr.filter(lang => lang.value === locale)[0];
    }
}

export default Locale;


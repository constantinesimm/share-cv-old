const jwt = require('jsonwebtoken');
const { secretString, sessionSecretString } = require('../../../config');
const localeMessages = require('../../../libs/i18n');

class HelperService {
    static createToken(type, data) {
        const expiresTime = type === 'access' ? '3h' : '24h';

        return jwt.sign(data, sessionSecretString, { expiresIn: expiresTime })
    }

    static verifyToken(type, token) {
        return jwt.verify(token, sessionSecretString, {}, (error, decoded) => {
            return error ? error : decoded;
        })
    }

    static getLanguageHeader(request) {
        const language = request.header('accept-language') || 'en';

        return localeMessages(language);
    }
}

module.exports = HelperService;
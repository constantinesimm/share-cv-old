const jwt = require('jsonwebtoken');
const { secretString, sessionSecretString } = require('../../../config');

class Helper {
    static createToken(type, data) {
        const expiresTime = type === 'access' ? '3h' : '24h';

        return jwt.sign(data, sessionSecretString, { expiresIn: expiresTime })
    }

    static verifyToken(type, token) {
        return jwt.verify(token, sessionSecretString, {}, (error, decoded) => {
            return error ? error : decoded;
        })
    }
}

module.exports = Helper;
const jwt = require('jsonwebtoken');
const { secretString } = require('../../config');

const createJWT = (type, data) => {
    return jwt.sign(data, secretString, { expiresIn: type === 'auth' ? '9h' : '24h' });
};

const verifyJWT = (token) => {
    return jwt.verify(token, secretString, {}, (error, decode) => error ? error : decode);
};

const publicUserData = user => {
    return {
        email: user.email,
        token: user.accessToken,
        isVerified: user.isVerified,
        data: user.data
    }
};

module.exports = {
    createJWT, verifyJWT, publicUserData
}

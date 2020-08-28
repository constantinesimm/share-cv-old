const locale = require('../../libs/i18n');
const HttpError = require('../../libs/http-error');
const Helper = require('../../modules/users/services/help-service');
const UserService = require('../../modules/users/services/user-service');

class ApiGuard {
    static isPublic(req, res, next) {
        if (!req.headers.authorization) return next();

        return next(new HttpError(403, 'guest users'))
    }

    static isPrivate(req, res, next) {
        if (!req.headers.authorization) return next(new HttpError(401, 'need auth'))

        let verify = Helper.verifyToken(req.headers.authorization);

        console.log('verify', verify);

        return UserService.findUserByEmail(req.body, locale(req).messages)
            .then(response => {
                console.log('findUserByEmail response', response);
                return next();
            })
            .catch(error => {
                console.log('findUserByEmail error', error);
                return next();
            });
    }

    static isAdmin(req, res, next) {}
}

module.exports = ApiGuard;

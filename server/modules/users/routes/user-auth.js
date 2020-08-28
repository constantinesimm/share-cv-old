const router = require('express').Router();
const locale = require('../../../libs/i18n');
const validate = require('../../../libs/validator');

const ApiGuard = require('../../../middleware/api-guard');
const HttpError = require('../../../libs/errors/http-error');
const UserService = require('../services/user-service');

router.post('/login', ApiGuard.isPublic, validate.loginOrRegister, (req, res, next) => UserService.authentication(req, res, next));

router.post('/logout', ApiGuard.isPrivate, (req, res, next) => {
    console.log('logout');
    return res.json({ message: 'OK' });
});

router.post('/register', ApiGuard.isPublic, validate.loginOrRegister, (req, res, next) => {
    UserService.createAccount(req.body, locale(req).lang, locale(req).messages)
        .then(data => res.json(data))
        .catch(error => next(new HttpError(error.status, error.message)))
});

module.exports = router;
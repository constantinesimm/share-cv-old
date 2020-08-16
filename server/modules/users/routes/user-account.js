const router = require('express').Router();
const locale = require('../../../libs/i18n');
const validate = require('../../../libs/validator');

const HttpError = require('../../../libs/errors/http-error');
const UserService = require('../services/user-service');

router.post('/account/authenticate', validate.loginOrRegister, (req, res, next) => UserService.authentication(req, res, next));

router.post('/account/create', validate.loginOrRegister, (req, res, next) => {
    UserService.createAccount(req.body, locale(req).lang, locale(req).messages)
        .then(data => res.json(data))
        .catch(error => next(new HttpError(error.status, error.message)))
});

module.exports = router;
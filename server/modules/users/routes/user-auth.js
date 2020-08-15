const router = require('express').Router();
const HttpError = require('../../../libs/errors/http-error');
const UserService = require('../services/user-service');
const UserAuthService = require('../services/auth-service');

router.post('/account/create', (req, res, next) => {
    const msg = UserAuthService.getLanguageHeader(req);

    UserService.createAccount(req.body, msg)
        .then(data => res.json(data))
        .catch(error => next(new HttpError(error.status, error.message)))
});

module.exports = router;
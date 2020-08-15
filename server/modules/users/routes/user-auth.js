const router = require('express').Router();
const HttpError = require('../../../libs/errors/http-error');
const UserService = require('../services/user-service');
const HelperService = require('../services/helper-service');

router.post('/account/create', (req, res, next) => {
    UserService.createAccount(req.body, HelperService.getLanguageHeader(req))
        .then(data => res.json(data))
        .catch(error => next(new HttpError(error.status, error.message)))
});

module.exports = router;
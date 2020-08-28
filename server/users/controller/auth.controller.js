const router = require('express').Router();
const HttpError = require('../../libs/http-error');

const AuthService = require('../services/auth.service');

router.post('/login', (req, res, next) => {
    AuthService.login(req.body)
        .then(user => res.json(user))
        .catch(error => next(new HttpError(error.status, error.message)));
});

router.post('/logout', (req, res, next) => {
    AuthService.logout(req.body)
        .then(result => res.json(result))
        .catch(error => next(new HttpError(error.status, error.message)))
})

router.post('/register', (req, res, next) => {
    AuthService.register(req.body)
        .then(result => res.json(result))
        .catch(error => next(new HttpError(error.status, error.message)))
})

router.post('/password-reset', (req, res, next) => {
    AuthService.passwordReset(req.body)
        .then(result => res.json(result))
        .catch(error => next(new HttpError(error.status, error.message)))
})

router.post('/email-confirm', (req, res, next) => {
    AuthService.emailConfirm(req.body)
        .then(result => res.json(result))
        .catch(error => next(new HttpError(error.status, error.message)))
})

router.post('/token-verify', (req, res, next) => {})

module.exports = router;

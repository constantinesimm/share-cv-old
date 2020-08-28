const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const locale = require('../../../libs/i18n');
const passport = require('passport');
const Helper = require('./help-service');
const HttpError = require('../../../libs/errors/http-error');
const UserAuthModel = require('../models/auth-model');
const sendEmailMessage = require('../../../libs/mailer/nodemailer');


class UserService {
    static authentication(req, res, next) {
        const msg = locale(req).messages;

        passport.authenticate('local', {}, (error, user, info) => {
            if (error) return next(new HttpError(error));
            if (!user) {
                const errMsg = info.status === 404 ? msg.error.userNotFound : info.status === 403 ? msg.error.accountNotActive : info.message;
                
                return next(new HttpError(info.status, errMsg));
            };
    
            return req.logIn(user, (error) => {
                if (error) return next(new HttpError(error.status, msg.error.incorrectCredentials))
                
                return res.json(user);
            });
        })(req, res, next);
    }

    static deserializeUser(data, done) {
        UserAuthModel
            .findOne(data)
            .then(user => done(null, user))
            .catch(error => new HttpError(error));
    }

    static createAccount(data, lang, msg) {
        return new Promise((resolve, reject) => {
            UserAuthModel.findOne({ email: data.email }, (err, user) => {
                if (err) return reject({ status: 500, message: error.message });
                if (user) return reject({ status: 400, message: msg.error.userEmailExists });

                return bcrypt.genSalt(10, (err, salt) => {
                    return bcrypt.hash(data.secret, salt, (err, hash) => {

                        const newAccount = {
                            email: data.email,
                            hash: hash,
                            serviceToken: Helper.createToken('service', { email: data.email }),
                            isVerified: false
                        };

                        UserAuthModel.create(newAccount, (err, user) => {
                            if (err) return reject({ status: 500, message: err.message });
                            sendEmailMessage(lang, msg, 'registerConfirm', user.email, msg.email.recipient, user.serviceToken)
                            
                            return resolve({ message: msg.success.sentEmailInvite, user: user });
                        })
                    })
                })
            })
        })
    }

    static verifyAccount() {
        return new Promise((resolve, reject) => {

        })
    }

    static confirmAccount() {
        return new Promise((resolve, reject) => {

        })
    }

    static editAccount() {
        return new Promise((resolve, reject) => {

        })
    }

    static removeAccount() {
        return new Promise((resolve, reject) => {

        })
    }

    static findUserByEmail(data, msg) {
        return new Promise((resolve, reject) => {
            UserAuthModel.findOne({ email: data.email }, (err, user) => {
                if (err) return reject({ status: 500, message: error.message });
                if (!user) return reject({ status: 404, message: msg.error.userNotFound });

                return resolve(user);
            })
        })
    }
}

module.exports = UserService;
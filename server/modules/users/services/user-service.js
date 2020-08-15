const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserAuthModel = require('../models/auth-model');
const UserAuthService = require('../services/auth-service');
const { secretString, sessionSecretString } = require('../../../config');

class UserService {
    static createAccount(data, msg) {
        return new Promise((resolve, reject) => {
            UserAuthModel.findOne({ email: data.email }, (err, user) => {
                if (err) return reject({ status: 500, message: error.message });
                if (user) return reject({ status: 400, message: msg.error.userEmailExists });

                return bcrypt.genSalt(10, (err, salt) => {
                    return bcrypt.hash(data.secret, salt, (err, hash) => {
                        const newAccount = {
                            email: data.email,
                            hash: hash,
                            serviceToken: UserAuthService.createToken('service', { email: data.email }),
                            isVerified: false
                        };

                        UserAuthModel.create(newAccount, (err, user) => {
                            if (err) return reject({ status: 500, message: err.message });
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
}

module.exports = UserService;
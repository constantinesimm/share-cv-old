const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserAuthModel = require('../models/auth-model');
const HelperService = require('./helper-service');
const { secretString, sessionSecretString } = require('../../../config');

class UserService {
    static createAccount(data, $t) {
        return new Promise((resolve, reject) => {
            UserAuthModel.findOne({ email: data.email }, (err, user) => {
                if (err) return reject({ status: 500, message: error.message });
                if (user) return reject({ status: 400, message: $t.error.userEmailExists });

                return bcrypt.genSalt(10, (err, salt) => {
                    return bcrypt.hash(data.secret, salt, (err, hash) => {
                        const newAccount = {
                            email: data.email,
                            hash: hash,
                            serviceToken: HelperService.createToken('service', { email: data.email }),
                            isVerified: false
                        };

                        UserAuthModel.create(newAccount, (err, user) => {
                            if (err) return reject({ status: 500, message: err.message });
                            return resolve({ message: $t.success.sentEmailInvite, user: user });
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
const bcrypt = require('bcryptjs');
const UserModel = require('../model');

const { createJWT, verifyJWT, publicUserData } = require('./helpers');

const login = data => new Promise((resolve, reject) => {
    UserModel.findOne({ email: data.email }, (err, user) => {
        if (err) return reject({ status: 500, message: err.message });
        if (!user) return reject({ status: 404, message: 'User not found' });
        if (!user.isVerified) return reject({ status: 403, message: 'User not active. Need to verify email' });

        return bcrypt.compare(data.secret, user.hash, (err, result) => {
            if (err) return reject({ status: 500, message: err.message });
            if (!result) return reject({ status: 401, message: 'Incorrect email or password' })

            user.accessToken = createJWT('auth', { email: user.email });

            user.save((err, doc) => {
                if (err) return reject({ status: 500, message: err.message });

                return resolve({ user: publicUserData(doc), message: 'Login successfull'});
            });
        });

    });
});

const logout = data => new Promise((resolve, reject) => {
    UserModel.findOne({ email: data.email }, (err, user) => {
        if (err) return reject({ status: 500, message: err.message });
        if (!user) return reject({ status: 404, message: 'User not found' });

        user.accessToken = null;

        user.save((err, doc) => {
            if (err) return reject({ status: 500, message: err.message });

            return resolve({ message: `Всего хорошего, ${ user.data.personal.firstname }` })
        })
    })
});

const register = data => new Promise((resolve, reject) => {
    UserModel.findOne({ email: data.email }, (err, user) => {
        if (err) return reject({ status: 500, message: err.message });
        if (user) return reject({ status: 400, message: 'User already exists' });

        return bcrypt.genSalt(10, (err, salt) => {
            if (err) return reject({ status: 500, message: err.message });

            return bcrypt.hash(data.secret, salt, (err, hash) => {
                if (err) return reject({ status: 500, message: err.message });

                const newUser = {
                    email: data.email,
                    hash: hash,
                    serviceToken: createJWT('service', { email: data.email })
                };

                UserModel.create(newUser, (err, doc) => {
                    if (err) return reject({ status: 500, message: err.message });

                    return resolve({ message: 'Email verify link sent to email' })
                });
            })
        })
    })
});

const passwordReset = data => new Promise((resolve, reject) => {
    UserModel.findOne({ email: data.email }, (err, user) => {
        if (err) return reject({ status: 500, message: err.message });
        if (!user) return reject({ status: 404, message: 'User not found' });

        user.hash = null;
        user.serviceToken = createJWT('service', { email: user.email });

        user.save((err, doc) => {
            if (err) return reject({ status: 500, message: err.message });

            return resolve({ message: 'Password recovery link sent to email' })
        });
    })
});

const emailConfirm = data => new Promise((resolve, reject) => {
    if (!verifyJWT(data.token).email && verifyJWT(data.token).message) return reject( { message: verifyJWT(data.token).message });
    else {
        UserModel.findOne({ email: verifyJWT(data.token).email }, (err, user) => {
            if (err) return reject({ status: 500, message: err.message });
            if (!user) return reject({ status: 404, message: 'User not found' });

            user.isVerified = true;
            user.serviceToken = null;

            user.save((err, doc) => {
                if (err) return reject({ status: 500, message: err.message });

                return resolve({ message: 'Email confirmed, Now you can login using your credentials' });
            });
        })
    }
});


module.exports = {
    login,
    logout,
    register,
    passwordReset,
    emailConfirm
}


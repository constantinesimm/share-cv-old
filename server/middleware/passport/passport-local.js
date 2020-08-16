const bcrypt = require('bcryptjs');
const HttpError = require('../../libs/errors/http-error');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../../modules/users/services/user-service');
const UserAuthModel = require('../../modules/users/models/auth-model');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ 
            usernameField: 'email', 
            passwordField: 'secret'
        }, 
        (username, password, done) => {
            UserAuthModel
                .findOne({ email: username })
                .then(user => {
                    if (!user) return done(null, false, { status: 404, message: '' })
                    if (!user.isVerified) return done(null, false, { status: 403, message: '' });

                    return bcrypt.compare(password, user.hash, (err, res) => {
                        if (err) return done(null, false, err);
                        if (!res) return done(null, false, { status: 401, message: '' });

                        user.accessToken = Helper.createToken('access', { _id: user._id, email: user.email });

                        user.save().then(() => done(null, { user: user, token: user.accessToken }));
                    })
                })
                .catch(error => done(new HttpError(error)));
        }))

    passport.serializeUser((data, done) => done(null, data.user_id));
    passport.deserializeUser((token, done) => UserService.deserializeUser({ accessToken: token }, done));
}
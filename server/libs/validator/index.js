const HttpError = require('../http-error');
const locale = require('../i18n');
const Schemas = require('./schemas');

const ajv = require('ajv')({
    $data: true,
    allErrors: true,
    jsonPointers: true
});
require('ajv-keywords')(ajv);
require('ajv-errors')(ajv, { singleError: true });

const validator = (schema, data, next) => ajv.validate(schema, data) ? next() : next(new HttpError(422, ajv.errors[0].message));

module.exports = {
    loginOrRegister(req, res, next) {
        return validator(Schemas(locale(req).messages).createOrLogin, req.body, next);
    }
}

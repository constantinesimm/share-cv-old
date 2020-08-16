
module.exports = (locale) => {
    const rules = require('./rules')(locale);
    
    return {
        createOrLogin: {
            type: 'object',
            required: ['email', 'secret'],
            additionalProperties: true,
            properties: {
                email: rules.email,
                secret: rules.secret
            },
            errorMessage: {
                required: {
                    email: locale.validate.emailRequired,
                    secret: locale.validate.secretRequired
                }
            }
        }
    }
}
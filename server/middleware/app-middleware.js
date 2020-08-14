const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = (app) => {
    // Request body parsing middleware
    app
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }));

    // Secure app by setting various HTTP headers
    app
        .use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
        .use(helmet.xssFilter())
        .use(helmet.noSniff());

    // Cross-origin resource sharing
    if (!global.isProduction) {
        app.use(require('cors')({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
            'Access-Control-Allow-Methods': 'POST, OPTIONS'
        }));
    }
};
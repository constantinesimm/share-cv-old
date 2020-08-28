const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = (app) => {
    // Request body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Secure app by setting various HTTP headers
    app.use(helmet.noSniff());
    app.use(helmet.xssFilter());
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));

    // Cross-origin resource sharing
    if (process.env.NODE_ENV !== 'production') {
        app.use(require('cors')({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Accept-Language, Authorization',
        }));
    }
};

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

module.exports = (app) => {
    // Secure app by setting various HTTP headers
    app
        .use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
        .use(helmet.xssFilter())
        .use(helmet.noSniff())

    // Cross-origin resource sharing
    app.use(cors({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    }));

    // Request body parsing middleware
    app
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }));
};
const cors = require('cors');
const helmet = require('helmet');

module.exports = (app) => {
    app
        .use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }))
        .use(helmet.xssFilter())
        .use(helmet.noSniff())
        .use(cors({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization',
            'Access-Control-Allow-Methods': 'POST, OPTIONS'
        }));
};
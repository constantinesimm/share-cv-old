const app = require('express')();

/* Libraries */
const connectMongoDB = require('./libs/database/mongoose');

/* Middleware */
const setController = require('./controller');
const setErrorHandler = require('./middleware/error-handler');
const setResponseParser = require('./middleware/response-parsers-handler');
const setSecureHandler = require('./middleware/secure-handler');

/* connect database */
connectMongoDB();

/* Secure middleware */
setSecureHandler(app);

/* Request body parser middleware */
setResponseParser(app);

/* Router */
setController(app);

/* Error handler */
setErrorHandler(app);

module.exports = app;

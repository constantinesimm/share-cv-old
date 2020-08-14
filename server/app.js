const app = require('express')();
const connectMongoDatabase = require('./libs/database/mongoose');
const setController = require('./controller');
const setErrorHandler = require('./middleware/error-handler');
const setAppMiddleware = require('./middleware/app-middleware');

/**
 *  Connect Mongo Database
 *  Mongoose package
 */
connectMongoDatabase();

/**
 *  App middleware:
 *  Secure - helmet package
 *  Secure - CORS package
 *  Request parser - body-parser package
 */
setAppMiddleware(app);

/**
 *  App Router Controller
 */
setController(app);

/**
 * App Error handler middleware
 */
setErrorHandler(app);

module.exports = app;

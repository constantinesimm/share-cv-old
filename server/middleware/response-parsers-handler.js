const bodyParser = require('body-parser');

module.exports = (app) => {
    app
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }));
};
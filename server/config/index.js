const path = require('path');
require('dotenv').config({ path: path.join(__dirname + '/../../.env') });

global.isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	secretString: process.env.CONTROL_STRING,
	sessionSecretString: process.env.SESSION_CONTROL_STRING,
	database: {
		mongo: {
			uri: !global.isProduction ? `mongodb://localhost:27017/${ process.env.DB_NAME }` :
				`mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_USER_PASS }@${ process.env.DB_HOST }/${ process.env.DB_NAME }?retryWrites=true&w=majority`,
			options: {
				useNewUrlParser: true,
				useUnifiedTopology: true
			}
		}
	},
	smtp: {
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: false,
		requireTLS: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	},
}
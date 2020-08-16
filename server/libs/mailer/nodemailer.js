const { smtp } = require('../../config');
const HttpError = require('../errors/http-error');
const nodemailer = require('nodemailer');
const { subjectTemplate, letterTemplate } = require('./email-tmpl');

module.exports = (locale, messages, emailTemplate, emailRecipient, recipientName, mailBodyToken) => {
    const transporter = nodemailer.createTransport(smtp);
    const message = {
		from: '"Share CV" <noreply@share-cv.com>',
		to: emailRecipient,
		subject: subjectTemplate(messages, emailTemplate),
		html: letterTemplate(locale, messages, emailTemplate, recipientName, mailBodyToken)
	};
    
    transporter.sendMail(message, (err, info) => {
        if (err) {
            new HttpError(500, err.message);
            return process.exit(1);
        }

        transporter.close();
    });
};
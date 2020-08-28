const fs = require('fs');
const path = require('path');
const express = require('express');
const HttpError = require('./libs/http-error');

const indexHtml = path.join(__dirname, `../dist/index.html`);
const staticPath = path.join(__dirname, '../dist');

/* Application API endpoints */
const routes = {
	auth: require('./users/controller/auth.controller')
};

/* Application controller handler */
module.exports = app => {
	app.use('/api/v1/users/auth', routes.auth);

	// redirect to https in production;
	if (global.isProduction) {
		app.use((req, res, next) => {
		    return req.header('x-forwarded-proto') !== 'https' ? res.redirect(`https://${req.header('host')}${req.url}`) : next()
        })
	}

	/* static path and file */
	app.use(express.static(staticPath));

	app.get('*', (req, res) => {
		fs.stat(indexHtml, (err, stats) => err ? new HttpError(500, error.message) : res.set({
			'Content-Type': 'text/html; charset=utf-8', 'Content-Length': stats.size
		}))

		fs.createReadStream(indexHtml).pipe(res);
	});
};

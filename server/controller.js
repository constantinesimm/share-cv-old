const fs = require('fs');
const path = require('path');
const express = require('express');
const HttpError = require('./libs/errors/http-error');

const indexHtml = path.join(__dirname, `../dist/index.html`);

/* Application API endpoints */
const routes = {
	
};

/* Application controller handler */
module.exports = app => {
	// redirect to https in production;
	if (global.isProduction) {
		app.use((req, res, next) => req.header('x-forwarded-proto') !== 'https' ? res.redirect(`https://${ req.header('host') }${ req.url }`) : next())
	}

	/* static path and file */
	app.use(express.static(path.join(__dirname, '../dist')));
	app.get('*', (req, res) => {
		fs.stat(indexHtml, (error, stats) => {
			if (error) return new HttpError(500, error.message);
			
            res.set({ 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': stats.size })
        })
		
		fs.createReadStream(indexHtml).pipe(res);
	});
};
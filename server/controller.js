const path = require('path');
const express = require('express');
const FileSystem = require('./libs/fs');

const indexHtml = path.join(__dirname, `../${ global.isProduction ? 'dist' : 'public' }/index.html`);

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
		res.set({ 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': FileSystem.stats(indexHtml).size })
		
		FileSystem.readStream(indexHtml).pipe(res);
	});
};
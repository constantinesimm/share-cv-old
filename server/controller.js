const fs = require('fs');
const path = require('path');
const express = require('express');
const FileSystem = require('./libs/fs');

const isProduction = process.env.NODE_ENV === 'production';

/* Application API endpoints */
const routes = {
	
};

/* Path to static index.html file */
const filePath = isProduction ? path.join(__dirname, '../dist/index.html') : path.join(__dirname, '../public/index.html');

/* Application controller handler */
module.exports = app => {
	
	/* static path and file */
	app.use(express.static(path.join(__dirname, '../dist')));
	app.get('*', (req, res) => {
		console.log(FileSystem.stats(filePath).size)
		res.set({ 'Content-Type': 'text/html; charset=utf-8', 'Content-Length': FileSystem.stats(filePath).size })
		
		fs.createReadStream(filePath).pipe(res);
	});
};
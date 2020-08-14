const mongoose = require('mongoose');
const { mongo } = require('../../config').database;

module.exports = () => {
	return mongoose
		.connect(mongo.uri, mongo.options)
		.then(() => console.info('♦♦♦♦♦ Database(mongoDB) connected ♦♦♦♦♦'))
		.catch(error => console.error(`♦♦♦♦♦ Database(mongoDB) error - ${ error } ♦♦♦♦♦`));
};
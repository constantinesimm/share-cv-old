const fs = require('fs');
const HttpError = require('../errors/http-error');

class FileSystem {
    static stats(path) {
        fs.stat(path, (error, stats) => {
            if (error) return new HttpError(500, error.message);
            return stats
        })
    }
}

module.exports = FileSystem;


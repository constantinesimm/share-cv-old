const fs = require('fs');
const HttpError = require('../errors/http-error');

class FileSystem {
    static stats(path) {
        fs.stat(path, (error, stats) => {
            if (error) return new HttpError(500, error.message);
            else return stats;
        })
    }

    static readStream(path) {
        return fs.createReadStream(path)
    }
}

module.exports = FileSystem;


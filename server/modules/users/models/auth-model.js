const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAuthSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        set: v => v.toLowerCase()
    },
    hash: {
        type: String,
        default: null
    },
    accessToken: {},
    serviceToken: {},
    isVerified: {
        type: Boolean,
        default: false
    }
}, { collection: 'Users'});

module.exports = mongoose.model('UserAuthModel', UserAuthSchema);
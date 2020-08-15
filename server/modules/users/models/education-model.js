const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserEducationSchema = new Schema({
    university: [{
        name: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        period: [String],
        graduate: {
            type: String,
            required: true
        }
    }],
    courses: [{
        name: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        period: [String],
        result: {
            type: String,
            required: true
        },
        certificate: [{
            validUntil: Date,
            url: String,
            image: String
        }]
    }]
}, { collection: 'Education'})

module.exports = mongoose.model('UserEducationModel', UserEducationSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExperienceSchema = new Schema({
    company: [{
        name: {
            type: String,
            required: true
        },
        description: String,
        position: {
            type: String,
            required: true
        },
        period: [String],
        responsibility: [{
            type: String,
            required: true
        }]
    }],
    Technologies: [{
        variant: String,
        name: String
    }],
    services: [{
        variant: String,
        name: String
    }]
}, { collection: 'Experience'})

module.exports = mongoose.model('UserExperienceModel', UserExperienceSchema)
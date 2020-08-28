const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserExperienceSchema = new Schema({
    company: [{
        name: String,
        description: String,
        position: String,
        period: String,
        responsibility: [{
            type: String
        }],
        technologies: [{
            variant: String,
            name: String
        }],
        services: [{
            variant: String,
            name: String
        }]
    }]
}, { collection: 'Experience'})

module.exports = mongoose.model('UserExperienceModel', UserExperienceSchema)

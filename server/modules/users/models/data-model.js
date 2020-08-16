const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDataSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    phoneNumber: {
        type: [String],
        set: v => v.replace(/[+\s()]/g, '')
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    socialNetworks: {
        facebook: String,
        linkedin: String,
        github: String,
        instagram: String,
        skype: String,
        telegram: String,
        viber: String
    },
    languages: [{
        name: {
            type: String,
            required: true
        },
        proficiency: {
            type: String,
            required: true
        }
    }],
    positionTarget: {
        type: String,
        required: true
    }
}, { collection: 'Data'})

module.exports = mongoose.model('UserDataModel', UserDataSchema)
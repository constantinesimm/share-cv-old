const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    accessToken: {
        type: String,
        default: null
    },
    serviceToken: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    data: {
        contacts: {
            phone: String,
            facebook: String,
            linkedin: String,
            github: String,
            instagram: String,
            skype: String,
            telegram: String,
            viber: String
        },
        personal: {
            firstname: String,
            lastname: String,
            birthday: Date,
            gender: String,
            location: String,
            language: [{
                lang: String,
                level: String
            }],
            target: String
        },
        education: {
            university: [{
                name: String,
                department: String,
                period: String,
                graduate: String
            }],
            courses: [{
                name: String,
                company: String,
                period: String,
                result: String,
                certificate: [{
                    validUntil: Date,
                    url: String,
                    image: String
                }]
            }]
        },
        experience: {
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
        }
    }
}, { collection: 'Users'});

module.exports = mongoose.model('UserModel', UserSchema);

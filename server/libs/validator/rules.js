module.exports = (locale) => {
    return {
        email: {
            type: 'string',
            regexp: '/^\\S+@\\S+\\.\\S{2,10}$/',
            errorMessage: {
                regexp: locale.validate.emailRegexp
            }
        },
        secret: {
            type: 'string',
            minLength: 6,
            maxLength: 14,
            regexp: '/^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\\w])[\\w]{6,14}$/',
            errorMessage: {
                minLength: locale.validate.secretMinLength,
                maxLength: locale.validate.secretMaxLength,
                regexp: locale.validate.secretRegexp
            }
        },
        token: {
            type: 'string',
            minLength: 125,
            errorMessage: {
                minLength: locale.validate.tokenMinLength
            }
        },
        firstName: {
            type: 'string',
            minLength: 4,
            maxLength: 20,
            regexp: '/^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ]+$/',
            errorMessage: {
                minLength: locale.validate.firstNameMinLength,
                maxLength: locale.validate.firstNameMaxLength,
                regexp: locale.validate.firstNameRegexp
            }
        },
        lastName: {
            type: 'string',
            minLength: 4,
            maxLength: 20,
            regexp: '/^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ]+$/',
            errorMessage: {
                minLength: locale.validate.lastNameMinLength,
                maxLength: locale.validate.lastNameMaxLength,
                regexp: locale.validate.lastNameRegexp
            }
        },
        gender: {
            type: 'string',
            enum: ['male', 'female'],
            errorMessage: {
                enum: locale.validate.genderEnum
            }
        },
        phoneNumber: {
            type: 'string',
            regexp: '/(?=\\+\\d{2}\\s\\(\\d{3}\\)\\s\\d{3}\\s\\d{2}\\s\\d{2})/g',
            errorMessage: {
                regexp: locale.validate.phoneNumberRegexp
            }
        },
        birthday: {
            type: 'string',
            format: 'date-time',
            errorMessage: {
                format: locale.validate.birthdayFormat
            }
        }
    }
}
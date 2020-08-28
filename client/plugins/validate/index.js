import { i18n } from '@/plugins/i18n';

const passwordValid = (rule, value, callback) => {
    const reDigit = /(?=.*[\d])/g;
    const reLowerLetter = /(?=.*[a-z])/g;
    const reUpperLetter = /(?=.*[A-Z])/g;
    const reAllFormat = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\w])[\w]{6,14}$/;

    if (!reLowerLetter.test(value)) return callback(i18n.t('validator.pass.lowerCase'));
    if (!reUpperLetter.test(value)) return callback(i18n.t('validator.pass.upperCase'));
    if (!reDigit.test(value)) return callback(i18n.t('validator.pass.digit'));
    if (!reAllFormat.test(value)) return callback(i18n.t('validator.pass.format'));

    else return callback();
};

const namesValid = (rule, value, callback) => {
    const reLetters = /^[a-zA-ZА-Яа-яЁёЇїІіЄєҐґ\s-]{4,20}$/;

    return reLetters.test(value) ? callback() : callback(i18n.t('validator.name.format'))
};

const phoneValid = (rule,value, callback) => {
    //regExp for mask +99 (999) 999 99 99
    const rePhoneNumber = /(?=\+\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2})/g;

    return rePhoneNumber.test(value) ? callback() : callback(i18n.t('validator.phone.format'))
};

export default {
    email: [
        { required: true, message: i18n.t('validator.email.require') },
        { type: 'email', message: i18n.t('validator.email.format') }
    ],
    firstName: [
        { required: true, message: i18n.t('validator.name.requireFirst') },
        { min: 4, max: 20, message: i18n.t('validator.name.length') },
        { validator: namesValid }
    ],
    lastName: [
        { required: true, message: i18n.t('validator.name.requireLast') },
        { min: 4, max: 20, message: i18n.t('validator.name.length') },
        { validator: namesValid }
    ],
    gender: [
        { required: true, message: i18n.t('validator.gender'), trigger: 'blur' }
    ],
    phoneNumber: [
        { required: true, message: i18n.t('validator.phone.require') },
        { len: 19, message: i18n.t('validator.phone.length') },
        { validator: phoneValid }
    ],
    secret: [
        { required: true, message: i18n.t('validator.pass.require') },
        { min: 6, max: 14, message: i18n.t('validator.pass.length') },
        { validator: passwordValid }
    ]
};
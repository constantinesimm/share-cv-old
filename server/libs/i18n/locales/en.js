module.exports = {
    error: {
        accountAlreadyActive: 'User account is already activated',
        accountNotActive: 'Account not verified. You need to complete your registration!',
        incorrectRegisterLink: 'Access is denied. Incorrect registration link. Use the password recovery functionality',
        incorrectLinkNotFound: 'Incorrect registration link. User is not found',
        incorrectSessionToken: 'Invalid session token. Re-authorize',
        incorrectTokenData: 'Invalid token data',
        linkExpired: 'The link has expired. Use the password recovery functionality',
        resourceForbidden: 'Access to this resource is prohibited!',
        sessionExpired: 'The session has expired. Re-authorize',
        userEmailExists: 'User with this email exists',
        userNotFound: 'Пользователь не найден',
        userAlreadyRegister: 'User is already registered',
        userNotAuthenticated: 'Authorization is required to access this resource',
        onlyNotAuthUsers: 'The resource is available only to new visitors',
        incorrectCredentials: 'Incorrect login or password'
    },
    success: {
        accountActivated: 'User successfully activated',
        accountUpdated: 'User successfully updated',
        accountRemoved: 'User successfully removed',
        sentEmailInvite: 'Invite successfully sent to user email',
        sentPassRecoveryInviteLink: 'Password recovery link has been successfully sent to your email',
        passwordRestored: 'The password was successfully recovered. For authorization use your email and new password'
    },
    validate: {
        // email
        emailRegexp: 'Incorrect email format',
        emailRequired: 'You must specify the user\'s email address',

        // secret
        secretMinLength: 'Password must be at least 6 characters long',
        secretMaxLength: 'Password must be no more than 14 characters long',
        secretRegexp: 'Password must be from 6 to 14 characters long and contain at least 1 number, 1 uppercase and 1 lowercase letters of the Latin alphabet!',
        secretRequired: 'User password is required',

        // token
        tokenMinLength: 'Invalid token format',
        tokenRequired: 'The token is required to be transferred',

        //firstname
        firstNameMinLength: 'The name must be at least 4 characters long',
        firstNameMaxLength: 'The name must be no more than 20 characters',
        firstNameRegexp: 'The name can only consist of Cyrillic letters (Ukr / Rus)',
        firstNameRequired: 'Username must be specified',

        // lastname
        lastNameMinLength: 'Last name must be at least 4 characters long',
        lastNameMaxLength: 'Last name must be no more than 20 characters',
        lastNameRegexp: 'The surname can only consist of Cyrillic letters (Ukr / Rus)',
        lastNameRequired: 'You must provide the last name of the user',

        // sex
        genderEnum: 'You need to select the correct value for the "Gender" field',
        genderRequired: 'User gender must be selected',

        // phone number
        phoneNumberRegexp: 'Invalid phone number format',
        phoneNumberRequired: 'You must provide the user\'s phone number',
        birthdayFormat: 'Invalid birthday format',
    },
    email: {
        recipient: 'User',
        subjects: {
            registerConfirm: 'Share CV | Confirmation email',
		    registerComplete: 'Share CV | Account successfully activated',
		    passwordRestore: 'Share CV | Password recovery',
		    passwordRestoreComplete: 'Share CV | Password recovered successfully'
        },
        register: {
            greetings: 'Welcome!',
            headerText: 'Thank you for registering and sincerely hope that our service will help you achieve your goal :)',
            bodyContent: 'Please follow the link to complete registration and activate your account.',
            bodyWarning: 'Pay attention!',
            bodyLinkExpiresText: 'The link is valid for 24 hours!',
            buttonText: 'Confirm email'
        },
        activated: {
            greetings: 'Hello, !',
            headerText: 'Your account has been successfully activated.',
            bodyContent: 'Use your email and password to enter the service admin panel.',
            bodyLoginLink: 'The login page is available at the link below.',
            buttonText: 'Go to the admin panel'
        },
        passRecovery: {
            greetings: 'Hello, !',
            headerText: 'We have received a request to reset your account password.',
            bodyContent: 'Please follow the link to reset your password and reactivate your account.',
            bodyWarning: 'Pay attention!',
            bodyLinkExpiresText: 'The link is valid for 24 hours!',
            buttonText: 'Reset Password'
        },
        passRecoveryComplete: {
            greetings: 'Hello, !',
            headerText: 'Password recovered successfully, account activated.',
            bodyContent: 'You can log in using your email and new password.',
            bodyLoginLink: 'The login page is available at the link below.',
            buttonText: 'Go to the admin panel'
        }
    }
}
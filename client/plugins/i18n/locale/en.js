export default {
    pageTitles: {
        login: 'Share CV: Login',
        register: 'Share CV: Registration',
        verify: 'Share CV: User verify',
        admin: 'Share CV: Main',
        profile: 'Share CV: Profile',
        landing: 'Share CV: Application to easy create and share CV',
        createCV: 'Share CV: Create new CV',
        previewCV: 'Share CV: Preview CV'
    },
    copyright: {
        copyText: 'Copyright',
        author: 'Kostiantyn Peschanov',
        rightsText: 'All rights reserved'
    },
    buttons: {
        cancel: 'Cancel',
        logout: 'Logout',
        loginSubmit: 'Login',
        registerSubmit: 'Register',
        restorePasswordModal: 'Forgot password?',
        restorePasswordSubmit: 'Restore password',
    },
    forms: {
        titles: {
            login: 'Login',
            register: 'Register',
            verify: 'Verify',
            restorePassword: 'Password recovery form'
        },
        emailField: {
            label: 'Email',
            placeholder: 'Enter your email'
        },
        secretField: {
            label: 'Password',
            placeholder: 'Create new password'
        },
        confirmSecretField: {
            label: 'Confirm password',
            placeholder: 'Confirm new password'
        }
    },
    links: {
        registerPage: 'Create new account',
        loginPage: 'Account login'
    },
    tooltips: {
        writeEmail: 'Contact via email'
    },
    validator: {
        email: {
            format: 'Incorrect format of the "Email" field',
            require: 'Email is required'
        },
        pass: {
            lowerCase: 'Password must contain at least 1 lowercase letter',
            upperCase: 'Password must contain at least 1 uppercase letter',
            digit: 'Password must contain at least 1 digit',
            format: 'Incorrect format of the "Password" field',
            length: 'Password must be 6 to 14 characters long',
            match: 'Password and password confirm not match',
            require: 'Password is required',
            requireMatch: 'Password confirm is required'
        },
        name: {
            format: 'The field can contain only letters, space and dash',
            requireFirst: 'Firstname is required',
            requireLast: 'Lastname is required',
            length: 'The length must be between 4 and 20 characters'
        },
        gender: 'Gender is required',
        phone: {
            format: 'Invalid phone number format',
            require: 'Phone number is required',
            length: 'The phone number must be 12 digits long'
        }
    }
}
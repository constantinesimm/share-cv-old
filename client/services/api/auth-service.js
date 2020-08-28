import ApiClient from '@/plugins/http/http-client';

const ENDPOINTS = {
    LOGIN: '/api/v1/users/auth/login',
    LOGOUT: '/api/v1/users/auth/logout',
    REGISTER: '/api/v1/users/auth/register',
    PASS_RESET: '/api/v1/users/auth/password-reset',
    EMAIL_CONFIRM: '/api/v1/users/auth/email-confirm',
    TOKEN_VERIFY: '/api/v1/users/auth/token-verify',
}

export default {
    login(user) {
        return ApiClient.post(ENDPOINTS.LOGIN, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    logout(user) {
        return ApiClient.post(ENDPOINTS.LOGOUT, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    register(user) {
        return ApiClient.post(ENDPOINTS.REGISTER, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    passwordReset(user) {
        return client.post(ENDPOINTS.PASS_RESET, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    emailConfirm(user) {
        return ApiClient.post(ENDPOINTS.EMAIL_CONFIRM, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    tokenVerify(user) {
        return ApiClient.post(ENDPOINTS.TOKEN_VERIFY, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    }
}

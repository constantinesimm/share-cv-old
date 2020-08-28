import ApiClient from '@/plugins/http/http-client';

const BASE_URL = process.env.NODE_ENV === 'production' ? 
    process.env.APP_VUE_PROD_URL : process.env.APP_VUE_DEV_URL;

const ENDPOINTS = {
    LOGIN: '/api/v1/users/login',
    LOGOUT: '/api/v1/users/logout',
    CHECK_TOKEN: '/api/v1/users/check-serviceToken',
    REGISTER: '/api/v1/users/register',
    VERIFY: '/api/v1/users/verify',
    PASS_RECOVERY: '/api/v1/users/pass-recovery'
}

const client = new ApiClient(BASE_URL);

export default {
    login(user) {
        return client.post(ENDPOINTS.LOGIN, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    },
    logout(user) {
        return client.post(ENDPOINTS.LOGOUT, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.resolve(error.response.data))
    },
    register(user) {
        return client.post(ENDPOINTS.REGISTER, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.resolve(error.response.data))
    },
    passwordRecovery(user) {
        return client.post(ENDPOINTS.PASS_RECOVERY, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.resolve(error.response.data))
    },
    userVerify(user) {
        return client.post(ENDPOINTS.VERIFY, user)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.resolve(error.response.data))
    },
    checkToken(data) {
        return client.post(ENDPOINTS.CHECK_TOKEN, data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.resolve(error.response.data))
    }
}
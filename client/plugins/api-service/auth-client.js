import ApiClient from './api-client';
import { BASE_URL } from '../../config/constants';

const ENDPOINTS = {
    LOGIN: '/api/v1/users/account/authenticate',
    LOGOUT: '/api/v1/users/account/logout',
    CHECK_TOKEN: '/api/v1/users/check-serviceToken',
    CREATE_ACCOUNT: '/api/v1/users/account/create',
    VERIFY_ACCOUNT: '',
    CONFIRM_PASS_RESTORE: ''
}

const client = new ApiClient(BASE_URL);

export default {
    authenticate(data) {
        return client.post(ENDPOINTS.LOGIN, data)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error.response.data))
    }
}
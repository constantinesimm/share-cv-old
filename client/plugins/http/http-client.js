import Axios from 'axios';
import store from '@/store';
import { i18n } from '@/plugins/i18n';
import AuthHeader from '@/services/api/auth-header';

const getClient = (baseUrl = null) => {
    let options = {
        baseURL: baseUrl,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Accept-Language': i18n.locale
        }
    };

    Axios.interceptors.request.use(config => {
        if (store.getters['auth/isLoggedIn']) config.headers.common['Authorization'] = `Bearer ${ AuthHeader.getToken() }`;
    });

    Axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response.status === 401) store.dispatch('auth/logout', { email: store.getters['auth/getUser'].email });
        }
    );

    
    return Axios.create(options);
};

class ApiClient {
    constructor(baseUrl = null) {
        this.client = getClient(baseUrl);
    }

    get(url, conf = {}) {
        return this.client.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    post(url, data = {}, conf= {}) {
        return this.client.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
}

export default ApiClient;
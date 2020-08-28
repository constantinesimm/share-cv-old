import Axios from 'axios';
import { mapGetters } from 'vuex';
import { i18n } from '@/plugins/i18n';
import AuthHeader from '@/services/api/auth-header';

let options = {
    baseURL: process.env.NODE_ENV === 'production' ? 'https://share-cv.herokuapp.com' : 'http://localhost:3000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': i18n.locale
    }
};

const httpClient = Axios.create(options);

httpClient.interceptors.request.use(config => {
    console.log('config', config)
    if (AuthHeader.getToken()) config.headers['Authorization'] = AuthHeader.getToken();

    return config;
});

httpClient.interceptors.response.use(
    response => {
        if (response.config.url.split('/').pop() === 'logout') AuthHeader.removeToken();

        return response;
    }
)

class ApiClient {
    static get(url, conf = {}) {
        return httpClient.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    static post(url, data = {}, conf= {}) {
        return httpClient.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
}

export default ApiClient;

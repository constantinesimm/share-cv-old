import AuthHeader from '@/services/api/auth-header';
import AuthService from '@/services/api/auth-service';

let state = {
    status: null,
    user: {},
    token: null,
    isAuthenticated: false
};

const mutations = {
    AUTH_REQUEST(state) {
        state.status = 'pending'
    },
    AUTH_SUCCESS(state, payload) {
        state.status = 'success';
        state.token = payload.token;
        state.user = payload;
        state.isAuthenticated = true;
    },
    AUTH_ERROR(state) {
        state.status = 'error';
    },
    AUTH_LOGOUT(state) {
        state.status = null;
        state.token = null;
        state.user = {};
        state.isAuthenticated = false;
    }
};
const actions = {
	login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.login(user)
                .then(response => {
                    commit('AUTH_SUCCESS', response.user);
                    AuthHeader.setToken(response.user.token);

                    return resolve(response)
                })
                .catch(error => {
                    commit('AUTH_ERROR');
                    if (AuthHeader.getToken()) AuthHeader.removeToken();

                    return reject(error);
                })
        })
    },
    logout({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.logout(user)
                .then(response => {
                    commit('AUTH_LOGOUT');
                    AuthHeader.removeToken();

                    return resolve(response);
                })
                .catch(error => {
                    commit('AUTH_LOGOUT');
                    commit('AUTH_ERROR');
                    AuthHeader.removeToken();

                    return reject(error);
                })
        })
    },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.register(user)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    },
    passwordReset({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.passwordReset(user)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    },
    emailConfirm({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.emailConfirm(user)
                .then(response => resolve(response))
                .catch(error => reject(error))
        })
    }
};

const getters = {
    getUser: state => state.user,
    getAuthToken: state => state.token,
    isLoggedIn: state => state.isAuthenticated
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
};

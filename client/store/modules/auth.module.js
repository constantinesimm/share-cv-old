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
    AUTH_SUCCESS(state, token, user) {
        state.status = 'success';
        state.token = token;
        state.user = user;
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
    },
};
const actions = {
	login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.login(user)
                .then(response => {
                    commit('AUTH_SUCCESS', response.token, response.user);
                    AuthHeader.setToken(response.token);

                    return resolve(response.message)
                })
                .catch(error => {
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
                .then(response => {

                })
                .catch(error => {

                })
        })
    },
    logout({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.logout(user)
                .then(response => {
                    commit('AUTH_LOGOUT');

                    return resolve(response);
                })
                .catch(error => {
                    commit('AUTH_ERROR');

                    return reject(error);
                })
                .finally(() => AuthHeader.removeToken());
        })
    },
    passwordRecovery({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('AUTH_REQUEST');

            AuthService.passwordRecovery(user)
                .then(response => {

                })
                .catch(error => {

                })
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
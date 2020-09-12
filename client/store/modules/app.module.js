let state = {
    sidebarState: null,
    currentLocale: ''
};

const mutations = {
    'SET_SIDEBAR_STATE'(state, payload) {
        state.sidebarState = payload
    },
    'SET_CURRENT_LOCALE'(state, payload) {
        state.currentLocale = payload
    }
};
const actions = {
    toggleSidebar({ commit }, status) {
        commit('SET_SIDEBAR_STATE', status)
    },
    changeLocale({ commit }, locale) {
        commit('SET_CURRENT_LOCALE', locale)
    }
};

const getters = {
    getCurrentLocale: state => state.currentLocale,
    getSidebarState: state => state.sidebarState
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

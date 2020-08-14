import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

/**
 * Modules
 */
import examp from './modules/examp';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    examp
  },
  plugins: [
      createPersistedState({
        key: '$app_geoapteka'
        /*
        getState: key => ls.get(key),
        setState: (key, state) => ls.set(key, state)
        */
      })
  ]
});
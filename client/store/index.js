import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

/**
 * Modules
 */
import auth from './modules/auth.module';
import app from './modules/app.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      app,
      auth
  },
  plugins: [
      createPersistedState({
          key: '$app_sharecv'
      })
  ]
});

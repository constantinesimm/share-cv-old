import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Storage from '@/plugins/storage';

/**
 * Modules
 */
import auth from './modules/auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
      createPersistedState({
        key: 'share-cv__state',
        storage: {
          getItem: (key) => Storage.getItem(key),
          setItem: (key, data) => Storage.setItem(key, data),
          removeItem: (key) => Storage.removeItem(key)
        }
      })
  ]
});
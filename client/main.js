/* Core */
import Vue from 'vue';
import App from './App.vue';

/* Router & Store */
import router from './router';
import store from './store';

/* App packages */
import './app-packages';

/* Internalization */
import i18n from '@/libs/i18n';

new Vue({
    i18n,
    store,
    router: router,
    render: h => h(App)
}).$mount('#app')
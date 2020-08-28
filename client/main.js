/* Core */
import Vue from 'vue';
import App from './App.vue';

/* UI libraries and components */
import ElementUI from 'element-ui';
import './views/layouts';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import SweetAlertIcons from 'vue-sweetalert-icons';

/* Router & Store */
import router from './router';
import store from './store';

/* App packages */
import { i18n } from '@/plugins/i18n';
import AwesomeMask from 'awesome-mask';
import VueAnalytics from 'vue-analytics'

Vue.prototype.$eventHub = new Vue();
Vue.config.productionTip = process.env.NODE_ENV !== 'production';

Vue.directive('mask', AwesomeMask);

Vue.use(SweetAlertIcons);

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueAnalytics, {
    id: 'UA-158035852-2'
});

new Vue({
    i18n,
    store,
    router: router,
    render: h => h(App)
}).$mount('#app')
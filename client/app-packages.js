import Vue from 'vue';
import VueAnalytics from 'vue-analytics'

/* UI libraries and components */
import './layouts';
import 'element-ui/lib/theme-chalk/index.css';

/* Directives */
import AwesomeMask from 'awesome-mask';
Vue.directive('mask', AwesomeMask);

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

Vue.prototype.$eventHub = new Vue();

Vue.use(VueAnalytics, {
    id: 'UA-158035852-2'
});
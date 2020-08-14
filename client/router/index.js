import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

const withPrefix = (prefix, routes) => routes.map((route) => {
	route.path = prefix + route.path;
	return route;
});

const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		path: '*',
		redirect: '/'
	}
];

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-current-page'
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import { i18n, defaultLocale } from '@/libs/i18n';
import Locale from '../libs/i18n/locale';

const withPrefix = (prefix, routes) => routes.map((route) => {
	route.path = prefix + route.path;
	return route;
});

const routes = [
        {
            path: '/', 
            redirect: `/${ defaultLocale }`
        },
        {
        path: '/:lang',
        meta: {
            layout: 'admin'
        },
		children: [
            {
                path: '',
                meta: {
                    layout: 'admin'
                },
                component: () => import('../views/MainPage')
            },
            ...withPrefix('admin', [
                {
                    path: '/login',
                    meta: {
                        layout: 'admin',
                        pageTitle: `pageTitles.login`,
                        pageType: 'login'
                    },
                    component: () => import('../views/AuthPage')
                },
                {
                    path: '/register',
                    meta: {
                        layout: 'admin',
                        pageTitle: 'pageTitles.register',
                        pageType: 'register'
                    },
                    component: () => import('../views/AuthPage')
                }
            ]),
        ]
	},
    
];

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: '',
	linkExactActiveClass: 'is-current-page'
});

router.beforeEach((to, from, next) => {
    /**
     * Route Guard to check /change requested language
     */
    
    
    if (to.params.lang) {
        const lang = to.params.lang;
        const fullPath = to.fullPath;

        if (!Locale.checkRouteParam(lang)) next(Locale.changeRouteToDefaultLocale(fullPath, lang));
        if (!Locale.checkCurrentLocale(i18n.locale, lang)) i18n.locale = lang;
        Locale.setLangAttribute(i18n.locale);

        next();
    }
    /**
     * Get and set page title from route meta tag
     */

    if (to.matched.some(record => record.meta.pageTitle)) {
        document.title = i18n.t(to.meta.pageTitle);
        next();
    }
});

export default router;

/*
...withPrefix('/:lang/admin', [
        {
            path: '/login',
            meta: {
                layout: 'admin',
                pageTitle: `pageTitles.login`,
                pageType: 'login'
            },
            component: () => import('../views/AuthPage')
        },
        {
            path: '/register',
            meta: {
                layout: 'admin',
                pageTitle: 'pageTitles.register',
                pageType: 'register'
            },
            component: () => import('../views/AuthPage')
        }
    ]),
	{
		path: '*',
		redirect: '/:lang'
    }
    if (to.params.lang || !to.params.lang) {
        const lang = to.params.lang;
        const fullPath = to.fullPath;

        if (Locale.checkRouteParam(lang)) return next(Locale.changeRouteToDefaultLocale(fullPath, lang));
        if (!Locale.checkCurrentLocale(i18n.locale, lang)) i18n.locale = lang;
        Locale.setLangAttribute(i18n.locale);

        next();
    }
    */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import { capitalize } from '@/plugins/format';
import { i18n, defaultLocale } from '@/plugins/i18n';

const withPrefix = (prefix, routes) => routes.map((route) => {
	route.path = prefix + route.path;
	return route;
});

const routes = [
	{
		path: '/',
        name: 'landing-page',
        component: () => import('@/views/landing/LandingPage'),
        meta: {
            pageLayout: 'default',
            pageTitle: `pageTitle.landing`
        }
    },
    {
        path: '/admin',
        component: () => import('@/views/layouts/DefaultRouterLayout'),
        children: [
            {
                path: '',
                name: 'admin-index',
                meta: {
                    pageLayout: 'admin',
                    pageTitle: `pageTitles.admin`,
                    isPrivatePage: true
                },
                component: () => import('@/views/admin/AdminPage')
            },
            {
                path: 'users/profile',
                name: 'profile-page',
                component: () => import('@/views/admin/ProfilePage'),
                meta: {
                    pageLayout: 'admin',
                    pageTitle: `pageTitles.profile`,
                    isPrivatePage: true
                },  
            },
            {
                path: 'cv',
                component: () => import('@/views/layouts/DefaultRouterLayout'),
                children: [
                    {
                        path: 'create',
                        name: 'CreateCV',
                        meta: {
                            pageLayout: 'admin',
                            pageTitle: `pageTitles.createCV`,
                            isPrivatePage: true
                        },
                        component: () => import('@/views/admin/cv/CreatePage')
                    },
                    {
                        path: 'preview',
                        name: 'PrevievCV',
                        meta: {
                            pageLayout: 'admin',
                            pageTitle: `pageTitles.previewCV`,
                            isPrivatePage: true
                        },
                        component: () => import('@/views/admin/cv/PreviewPage')
                    }
                ]
            }
        ]
    },
    {
        path: '/users',
        component: () => import('@/views/layouts/DefaultRouterLayout'),
        children: [
            {
                path: 'login',
                name: 'login-page',
                meta: {
                    pageLayout: 'default',
                    pageTitle: `pageTitles.login`,
                    pageType: 'login',
                    isPrivatePage: false
                },
                component: () => import('@/views/users/AuthPage')
            },
            {
                path: 'register',
                name: 'register-page',
                meta: {
                    pageLayout: 'default',
                    pageTitle: `pageTitles.register`,
                    pageType: 'register',
                    isPrivatePage: false
                },
                component: () => import('@/views/users/AuthPage')
            },
            {
                path: 'verify',
                name: 'verify-page',
                meta: {
                    pageLayout: 'default',
                    pageTitle: `pageTitles.verify`,
                    pageType: 'verify',
                    isPrivatePage: false
                },
                component: () => import('@/views/users/AuthPage')
            },
        ]
    },
    {
        path: '/:user/:cv',
        name: 'PublicCV',
        meta: {
            pageLayout: 'default',
            pageTitle: `pageTitles.publicCV`,
            isUsernameRoute: true,
            isPrivatePage: false
        },
        component: () => import('@/views/admin/cv/PublicPage')
    }
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
     * Get and set page title from route meta tag
     * if page is public CV - set username in title
     */
    if (to.matched.some(record => record.meta.pageTitle)) !to.meta.isUsernameRoute ? 
        (document.title = i18n.t(to.meta.pageTitle), next()) : 
        (document.title = `Share CV: ${ capitalize(to.params.user.split('.').shift()) } ${ capitalize(to.params.user.split('.').pop()) }`, next());

    /**
     * Router Guard - isPrivatePage meta-tags
     * true – hide route for guest users
     * false - hide route for loggen in users
    
     if (to.matched.some(record => record.meta.isPrivatePage)) {
         const isPrivate = to.meta.isPrivatePage;
         const isLoggedIn = store.getters['auth/isLoggedIn'];

         if (isPrivate && !isLoggedIn) next({ path: '/users/login', query: { redirect: to.fullPath } })
         else if (!isPrivate && isLoggedIn) next({ path: from.fullPath })
         else next();
     }
     */
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        redirect: '/app/dashboard',
        component: () => import('@/views/layouts/DefaultRouterLayout'),
        children: [
            {
                path: 'dashboard',
                meta: {
                    layout: 'app',
                    title: 'Share CV | Dashboard'
                },
                component: () => import('@/views/app/DashboardPage')
            }
        ]
    },
    {
        path: '*',
        meta: {
            layout: 'default',
            title: 'Share CV | Error'
        },
        component: () => import('@/views/app/ErrorPage')
    }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'is-active-page'
});

export default router;

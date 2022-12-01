import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/pages/Dashboard.vue')
        },
        {
            path: '/dashboard:page',
            name: 'Dashboard',
            component: () => import('@/pages/About.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/pages/About.vue')
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: () => import('@/pages/NotFound.vue')
        },
        {
            path: "/:mode/payment/:category?",
            name: "form",
            component: () => import("../pages/Form.page.vue"),
        },

    ]
});

export default router;
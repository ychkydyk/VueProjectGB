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
            path: "/:mode/payment/:category?",
            name: "TaskForm",
            component: () => import("../components/TaskFormAdd.vue"),
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
            path: '*',
            // component: () => import('@/pages/NotFound.vue')
            redirect: {
                name: 'notfound',
            },
        }
    ]
});

export default router;
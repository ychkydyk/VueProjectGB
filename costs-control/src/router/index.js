import Vue from "vue";
import VueRouter from "vue-router";
// import Dashboard from "@/pages/Dashboard.vue";
// import About from "@/pages/About.vue";
// import NotFound from "@/pages/NotFound.vue";

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
import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import About from "@/pages/About.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: NotFound,
        },
    ]
});

export default router;
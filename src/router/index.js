import { createRouter, createWebHistory } from "vue-router";
const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ('@/views/Home/Index.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('@/views/About/Index.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () =>
            import ('@/views/Contact/Index.vue')
    },
    {
        path: '/articles',
        name: 'articles',
        component: () =>
            import ('@/views/Articles/Index.vue')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
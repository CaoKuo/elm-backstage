import { createRouter, createWebHashHistory } from 'vue-router';
import { appRoutes } from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue')
        },
        ...appRoutes,
    ]
})

export default router
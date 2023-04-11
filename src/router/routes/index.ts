
export const appRoutes = [
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    // {
    //     path: '/home',
    //     name: 'Home',
    //     component: () => import('@/views/home/index.vue')
    // }
]
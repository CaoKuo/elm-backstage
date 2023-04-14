
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
                meta: {
                    title: '首页',
                    icon: 'shouye'
                },
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/manage',
                name: 'Manage',
                meta: {
                    title: '数据管理',
                    icon: 'shuju',
                    isSecond: true,
                },
                component: () => import('@/views/manage/index.vue'),
                redirect: {
                    name: 'userManage',
                },
                children: [
                    {
                        path: 'user',
                        name: 'userManage',
                        meta: {
                            title: '用户管理'
                        },
                        component: () => import('@/views/manage/userManage.vue')
                    },
                    {
                        path: 'shop',
                        name: 'shopManage',
                        meta: {
                            title: '商家管理'
                        },
                        component: () => import('@/views/manage/shopManage.vue')
                    },
                    {
                        path: 'order',
                        name: 'orderManage',
                        meta: {
                            title: '订单管理'
                        },
                        component: () => import('@/views/manage/orderManage.vue')
                    },
                ]
            }
        ]
    },
]
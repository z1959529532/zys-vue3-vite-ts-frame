/**
 * 全局组件使用页面
 *
 * @author zys
 * @since 2023
 */
export default [
    {
        path: '/',
        name: 'layout',
        meta: {},
        component: () => import('@/views/GlobalComs/Layout/Layout.vue'),
        redirect: 'select',
        children: [
            {
                path: 'loading',
                name: 'loading',
                meta: {},
                component: () => import('@/views/GlobalComs/Loading/Loading.vue')
            },
            {
                path: 'select',
                name: 'select',
                meta: {},
                component: () => import('@/views/GlobalComs/Select/Select.vue')
            }
        ]
    },
]
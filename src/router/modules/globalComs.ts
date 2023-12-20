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
        redirect: 'loading',
        children: [
            {
                path: 'loading',
                name: 'loading',
                meta: {},
                component: () => import('@/views/GlobalComs/Loading/Loading.vue')
            },
        ]
    },
]
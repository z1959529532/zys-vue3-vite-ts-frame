/**
 * 全局组件使用页面
 *
 * @author zys
 * @since 2023
 */
export default [
    {
        path: 'button',
        name: 'button',
        meta: {
            isMenu: true,
            title: '使用button',
        },
        component: () => import('@/views/GlobalComs/Button/Button.vue')
    },
    {
        path: 'select',
        name: 'select',
        meta: {
            isMenu: true,
            title: '使用select',
        },
        component: () => import('@/views/GlobalComs/Select/Select.vue')
    },
    {
        path: 'loading',
        name: 'loading',
        meta: {
            isMenu: true,
            title: '使用loading',
        },
        component: () => import('@/views/GlobalComs/Loading/Loading.vue'),
        // children: [
        //     {
        //         path: 'load1',
        //         name: 'load1',
        //         meta: {
        //             isMenu: true,
        //             title: '使用loading1',
        //         },
        //     },
        //     {
        //         path: 'load2',
        //         name: 'load2',
        //         meta: {
        //             isMenu: true,
        //             title: '使用loading2',
        //         },
        //     },
        // ]
    },
]
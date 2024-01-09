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
            title: '使用icon和button',
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
        path: 'tree',
        name: 'tree',
        meta: {
            isMenu: true,
            title: '使用tree',
        },
        component: () => import('@/views/GlobalComs/Tree/Tree.vue')
    },
    {
        path: 'chart',
        name: 'chart',
        meta: {
            isMenu: true,
            title: '使用echarts',
        },
        component: () => import('@/views/GlobalComs/Chart/Chart.vue')
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
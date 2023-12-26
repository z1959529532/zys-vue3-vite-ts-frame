import { RouteRecordRaw } from 'vue-router'
import globalComs from "@/router/modules/globalComs"

/**
 * 所有路由
 *
 * @author zys
 * @since 2023
 */
export const allRoutes: Array<RouteRecordRaw> = [...globalComs];

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        meta: {},
        component: () => import('@/layout/index.vue'),
        redirect: allRoutes[0].path,
        children: allRoutes
    },
    {
        path: '/main',
        name: 'main',
        meta: {},
        component: () => import('@/views/Main/Main.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        meta: {},
        component: () => import('@/views/NotFound/NotFound.vue')
    }
];

export default routes

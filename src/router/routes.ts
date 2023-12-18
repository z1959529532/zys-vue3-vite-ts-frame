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
        name: 'main',
        meta: {},
        component: () => import('@/views/Main/Main.vue'),
        redirect: allRoutes[0].path,
        children: allRoutes
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        meta: {
            title: 'NotFound'
        },
        component: () => import('@/views/NotFound.vue')
    }
];

export default routes

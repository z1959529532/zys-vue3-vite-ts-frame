import {createRouter, createWebHistory} from 'vue-router'
import routes from "@/router/routes"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

function resetRoutes() {
    const routes = router.getRoutes();
    for (let i = 0; i < routes.length; i++) {
        const routeItem = routes[i];
        if (routeItem.name && router.hasRoute(routeItem.name)) {
            router.removeRoute(routeItem.name);
        }
    }
}

function addRoutes() {
    // 根据条件动态添加路由
    const addRoutes = [];
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        router.addRoute(route)
    }
}

router.beforeEach((to, from, next) => {
    next()
})

export default router;
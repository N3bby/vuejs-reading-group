import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {routes as routeDefinitions} from './routes';

const routes: Array<RouteRecordRaw> = Object.values(routeDefinitions);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

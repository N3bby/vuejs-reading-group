import HomeView from '@/views/HomeView.vue';
import {RouteRecordRaw} from 'vue-router';

export const routes = {
    HOME: <RouteRecordRaw>{
        path: '/',
        name: 'home',
        component: HomeView
    },
}
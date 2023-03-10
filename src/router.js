import Vue from 'vue';
import VueRouter from 'vue-router';
import PageHome from '@/views/PageHome';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PageHome
        },
        {
            path: '/category/:slug',
            component: () => import('@/views/PageCategories') 
        }
    ]});
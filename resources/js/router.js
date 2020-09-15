import Vue from 'vue'
import Router from 'vue-router'

import Index from "./components/Index"
Vue.use(Router)


const routes = [
    {
        path: '/',
        component: Index,
        name: 'Index'
    }
    ];

export default new Router({
    mode: 'history',
    routes
})

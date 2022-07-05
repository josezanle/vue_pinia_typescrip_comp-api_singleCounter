import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import HomeView from '../components/HomeView.vue'
import CounterView from '../components/CounterView.vue'

const routes: RouteRecordRaw[]  = [
    {
        path:"/",
        name: "Home",
        component: HomeView
    },
    {
        path:"/counter",
        name: "Counter",
        component: CounterView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
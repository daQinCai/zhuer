import Vue from 'vue';
import VueRouter from 'vue-router'
import tabIndex from './page/tabIndex.vue'
import index from './page/tabpage/index.vue'
import recommend from './page/tabpage/recommend.vue'
import search from './page/tabpage/search.vue'
Vue.use(VueRouter)
const routes = [
    {
        path:'/tabIndex',
        component:tabIndex,
        children:[
            {
                path:'/index',
                component:index
            },{
                path:'/recommend',
                component:recommend
            },{
                path:'/search',
                component:search
            }
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../components/HomePage.vue";
import WorksCollection from "../components/WorksCollection.vue";
export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHistory(),
    // 路由地址
    routes: [
        {path:'/',component:HomePage},
        {path:'/works',component:WorksCollection},
        {path:'/software',component:HomePage},
        {path:'/hardware',component:HomePage},
        {path:'/game',component:HomePage},
        {path:'/about',component:HomePage},
    ]
  })
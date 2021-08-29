import { createApp } from 'vue'
import App from './App.vue'
import router from "./route/index";
//import "./assets/js/MathJax.js";
import './assets/icon/iconfont.css'
const app=createApp(App)
//app.config.globalProperties.$MathJax=MathJax //数学公式格式
app.use(router)
app.mount('#app')

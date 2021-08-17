import { createApp } from 'vue'
import App from './App.vue'
import router from "./route/index";
import "./assets/js/MathJax.js";
import '../public/icon/iconfont.css'
const app=createApp(App)
app.config.globalProperties.$MathJax=MathJax
app.use(router)
app.mount('#app')
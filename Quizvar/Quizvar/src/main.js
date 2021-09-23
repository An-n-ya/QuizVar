import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/prism.css'

// 导入 router
import router from './router/router.js'



const app = createApp(App)



// 全局导入 ElementPlus
app.use(ElementPlus)

// 导入 router
app.use(router)

app.mount('#app')

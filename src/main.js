import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VuePageStack from 'vue-page-stack'

const app = createApp(App)
app.use(router)
app.use(VuePageStack, { router })
app.mount('#app')

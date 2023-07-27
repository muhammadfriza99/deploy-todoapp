import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.productionTip = false
app.config.globalProperties.$base = '/deploy-todoapp/'
app.use(router)

app.mount('#app')

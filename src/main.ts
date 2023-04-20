import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from './router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(Router)
app.use(pinia)
app.mount('#app')

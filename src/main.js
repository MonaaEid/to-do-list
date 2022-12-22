import { createApp } from 'vue'
// import App from './App.vue'
import AppTwo from './AppTwo.vue'

import router from './router'

import './assets/main.css'
import "./assets/reset.css"
// const app = createApp(App)
const portfolio = createApp(AppTwo)

// app.use(router)
portfolio.use(router)

// app.mount('#app')

portfolio.mount('#apptwo')
import { createApp } from 'vue'

import AppTwo from './AppTwo.vue'

import router from './router'

import './assets/main.css'
import "./assets/reset.css"
const portfolio = createApp(AppTwo)

portfolio.use(router)



portfolio.mount('#apptwo')

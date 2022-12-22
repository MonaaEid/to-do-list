import { createApp } from 'vue'
import AppTwo from './AppTwo.vue'

import './assets/main.css'

const portfolio = createApp(AppTwo)
portfolio.use(router)

portfolio.mount('#apptwo')
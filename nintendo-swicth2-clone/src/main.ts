import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createManager } from '@vue-youtube/core'

createApp(App).use(createManager()).mount('#app')

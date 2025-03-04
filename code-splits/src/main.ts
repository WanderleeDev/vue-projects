import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import createVuetify from './plugins/vuetify'
import { VCodeBlockInstance } from './plugins/codeBlock'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(createPinia())
app.use(createVuetify)
app.use(VCodeBlockInstance)
app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')

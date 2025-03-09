import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import createVuetify from './plugins/vuetify'
import { VCodeBlockInstance } from './plugins/codeBlock'
import { VueQueryPlugin } from '@tanstack/vue-query'
import {
  ProfileApiService,
  PROFILE_API_SERVICE,
} from './modules/profile/services/ProfileApi.service'
import { AuthApiService, AUTH_API_SERVICE } from './modules/auth/services/auth.service'

const ProfileApiSvc = new ProfileApiService()
const AuthApiSvc = new AuthApiService()

const app = createApp(App)

app.provide(PROFILE_API_SERVICE, ProfileApiSvc)
app.provide(AUTH_API_SERVICE, AuthApiSvc)

app.use(createPinia())
app.use(createVuetify)
app.use(VCodeBlockInstance)
app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')

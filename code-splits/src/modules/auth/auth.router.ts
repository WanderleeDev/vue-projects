import { callbackGuard } from '@/shared/guards/auth.guard'
import type { RouteRecordRaw } from 'vue-router'

export const authRouter: RouteRecordRaw[] = [
  {
    path: '/auth',
    redirect: '/auth/login',
    name: 'auth',
    meta: { guestOnly: true },
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('./view/LoginView.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/auth/signup',
    name: 'register',
    component: () => import('./view/SignUpView.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/auth/callback',
    name: 'forgot-password',
    component: () => import('./view/CallbackView.vue'),
    beforeEnter: callbackGuard,
    meta: { guestOnly: true },
  },
]

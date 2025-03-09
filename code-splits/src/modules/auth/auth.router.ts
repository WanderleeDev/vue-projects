import { callbackGuard } from '@/shared/guards/auth.guard'
import type { RouteRecordRaw } from 'vue-router'

export const authRouter: RouteRecordRaw[] = [
  {
    path: '/auth',
    redirect: '/auth/login',
    name: 'auth',
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('./view/LoginView.vue'),
  },
  {
    path: '/auth/signup',
    name: 'register',
    component: () => import('./view/SignUpView.vue'),
  },
  {
    path: '/auth/callback',
    name: 'forgot-password',
    component: () => import('./view/CallbackView.vue'),
    beforeEnter: callbackGuard,
  },
]

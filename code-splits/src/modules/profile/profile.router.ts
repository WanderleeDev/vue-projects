import type { RouteRecordRaw } from 'vue-router'

export const profileRouter: RouteRecordRaw[] = [
  {
    path: 'profile',
    name: 'profile',
    meta: { requiresAuth: true },
    component: () => import('./view/ProfileView.vue'),
  },
]

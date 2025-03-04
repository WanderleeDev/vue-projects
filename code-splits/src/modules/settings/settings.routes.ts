import type { RouteRecordRaw } from 'vue-router'

export const settingRouter: RouteRecordRaw[] = [
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../../views/SettingsView.vue'),
  },
]

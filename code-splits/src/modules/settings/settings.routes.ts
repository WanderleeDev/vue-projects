import type { RouteRecordRaw } from 'vue-router'

export const settingRouter: RouteRecordRaw[] = [
  {
    path: 'settings',
    name: 'settings',
    component: () => import('../../views/SettingsView.vue'),
    children: [
      {
        path: '',
        name: 'setting menu',
        component: () => import('./views/EntryPoint.vue'),
      },
      {
        path: 'background',
        name: 'background image',
        component: () => import('./views/BackgroundImage.vue'),
      },
      {
        path: 'fonts',
        name: 'fonts',
        component: () => import('./views/FontsView.vue'),
      },
      {
        path: 'suggestions',
        name: 'suggestions',
        component: () => import('./views/SuggestionsView.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
]

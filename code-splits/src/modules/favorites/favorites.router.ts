import type { RouteRecordRaw } from 'vue-router'

export const favoritesRouter: RouteRecordRaw[] = [
  {
    path: 'favorites',
    meta: {
      requiresAuth: true,
    },
    component: () => import('./view/FavoriteView.vue'),
  },
]

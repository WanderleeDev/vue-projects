import type { RouteRecordRaw } from 'vue-router'

export const exercisedRouter: RouteRecordRaw[] = [
  {
    path: 'exercises',
    component: () => import('./view/ExercisesView.vue'),
  },
  {
    path: 'exercises/:id',
    component: () => import('./view/ExerciseInfoView.vue'),
  },
]

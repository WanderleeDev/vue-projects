import type { RouteRecordRaw } from 'vue-router'

export const exercisesRouter: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../../views/ExercisesView.vue'),
  },
  {
    path: ':id',
    component: () => import('../../views/ExerciseInfoView.vue'),
  },
]

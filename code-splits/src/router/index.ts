import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { settingRouter } from '@/modules/settings/settings.routes'
import { exercisesRouter } from '@/modules/exercises/exercises.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/redirect/:to',
      beforeEnter() {
        location.href = 'https://github.com/WanderleeDev'
      },
      component: () => import('../shared/components/SpinnerUiverse.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import('../modules/exercises/layout/ExerciseLayout.vue'),
      children: [
        ...exercisesRouter,
        ...settingRouter,
        {
          path: '/:pathMatch(.*)*', // Ruta para manejar "not found" dentro de children
          name: 'exercise-not-found',
          component: () => import('../shared/components/EmptyState.vue'),
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router

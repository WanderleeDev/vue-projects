import { createRouter, createWebHistory } from 'vue-router'
import { settingRouter } from '@/modules/settings/settings.routes'
import { exercisedRouter } from '@/modules/exercises/exercises.router'
import { profileRouter } from '@/modules/profile/profile.router'
import { authRouter } from '@/modules/auth/auth.router'
import { favoritesRouter } from '@/modules/favorites/favorites.router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/dashboard/',
      name: 'dashboard',
      component: () => import('../modules/dashboard/layout/DashboardLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/dashboard/exercises',
        },
        ...exercisedRouter,
        ...settingRouter,
        ...profileRouter,
        ...favoritesRouter,
        {
          path: '/:pathMatch(.*)*',
          name: 'exercise-not-found',
          component: () => import('../shared/components/EmptyState.vue'),
        },
      ],
    },
    ...authRouter,
    {
      path: '/redirect/:to',
      beforeEnter() {
        location.href = 'https://github.com/WanderleeDev'
      },
      component: () => import('../shared/components/SpinnerUiverse.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router

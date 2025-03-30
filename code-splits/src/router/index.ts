import { createRouter, createWebHistory } from 'vue-router'
import { settingRouter } from '@/modules/settings/settings.routes'
import { exercisedRouter } from '@/modules/exercises/exercises.router'
import { profileRouter } from '@/modules/profile/profile.router'
import { authRouter } from '@/modules/auth/auth.router'
import { favoritesRouter } from '@/modules/favorites/favorites.router'
import { useAuthStore } from '@/modules/auth/store'

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
          name: 'exercises',
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
      name: 'redirect',
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

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const isRequiresAuth = Boolean(to.meta['requiresAuth'])
  const isUser = authStore.store.isLoggedIn && to.meta['guestOnly']
  const isLogin = authStore.store.isLoggedIn

  if (isUser) return next(from.fullPath)

  if (!isRequiresAuth) return next()

  if (authStore.store.isLoggedIn && isRequiresAuth) return next()

  await authStore.getSessionUser()

  if (!authStore.store.isLoggedIn) {
    return next({
      path: '/auth/login',
      query: { redirect: to.fullPath },
    })
  }

  next()
})

export default router

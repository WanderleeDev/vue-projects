import { useAuthStore } from '@/modules/auth/store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authGuard(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const authStore = useAuthStore()

  if (!authStore.store.isLoggedIn) return next('/auth')

  next()
}

export function callbackGuard(
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  const authStore = useAuthStore()

  if (authStore.store.isLoggedIn) return

  next()
}

import { defineStore } from 'pinia'
import type { AuthState } from '../interface/Auth.interface'
import { reactive } from 'vue'
import { safeInject } from '@/shared/utils/safeInject'
import { AUTH_API_SERVICE } from '../services/auth.service'
import type { LoginPayload } from '../schemas/login.schema'
import { handleToastError } from '@/shared/utils/handleError'
import type { OAuthProvider } from '../interface/AuthApi.interface'

const ID_STORE = 'auth'

const NULL_AUTH: AuthState = Object.freeze({
  isLoggedIn: false,
  token: null,
  refreshToken: null,
})

export const useAuthStore = defineStore(ID_STORE, () => {
  const authService = safeInject(AUTH_API_SERVICE)
  const store: AuthState = reactive({ ...NULL_AUTH })

  function patchState(state: Partial<AuthState>) {
    for (const [key, value] of Object.entries(state)) {
      if (value === undefined) continue

      store[key] = value
    }
  }

  async function signInUser(credentials: LoginPayload) {
    try {
      const { session } = await authService.signIn(credentials)
      patchState({
        isLoggedIn: true,
        token: session.access_token,
        refreshToken: session.provider_token || null,
      })
    } catch (e) {
      handleToastError(e)
    }
  }

  async function signInUserWithOAuth(provider: OAuthProvider) {
    try {
      await authService.signInWithOAuth(provider)
      patchState({ isLoggedIn: true })
    } catch (e) {
      handleToastError(e)
    }
  }

  async function signOutUser() {
    try {
      await authService.signOut()
      patchState({ ...NULL_AUTH })
    } catch (e) {
      handleToastError(e)
    }
  }

  async function getSessionUser() {
    try {
      const { refresh_token, access_token } = await authService.getSession()
      patchState({
        isLoggedIn: true,
        token: access_token,
        refreshToken: refresh_token,
      })
    } catch (e) {
      handleToastError(e)
    }
  }

  async function initializeStore() {
    try {
      await authService.getSession()
      patchState({ isLoggedIn: true })
    } catch {
      patchState({ isLoggedIn: false })
    }
  }

  initializeStore()

  return {
    store,
    signInUser,
    signInUserWithOAuth,
    signOutUser,
    getSessionUser,
  }
})

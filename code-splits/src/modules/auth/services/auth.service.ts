import type { LoginPayload } from '../schemas/login.schema'
import type { InjectionKey } from 'vue'
import type {
  AuthApi,
  OAuthProvider,
  SignInResponse,
  SignUpResponse,
} from '../interface/AuthApi.interface'
import { supabase } from '@/lib/supabaseClient'
import { AuthProvider, SessionError } from '@/shared/class/customErros'

export const AUTH_API_SERVICE: InjectionKey<AuthApi> = Symbol('profileApiService')

export class AuthApiService implements AuthApi {
  readonly #PROVIDERS: OAuthProvider[] = ['discord', 'github', 'google']

  public async signIn(credentials: LoginPayload): Promise<SignInResponse> {
    const { data, error } = await supabase.auth.signInWithPassword(credentials)

    if (error) throw error

    return data
  }

  public async signUp(credentials: LoginPayload): Promise<SignUpResponse> {
    const { data, error } = await supabase.auth.signUp({
      ...credentials,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) throw error
    if (!data) throw new Error('No data returned from sign up data')

    const isRepeatEmail = data.user?.identities?.length === 0

    if (isRepeatEmail) throw new Error('Mail is already in use')

    return data
  }

  public async signInWithOAuth(provider: OAuthProvider): Promise<void> {
    if (!this.#PROVIDERS.includes(provider)) {
      throw new AuthProvider(`[Auth Provider Error] Provider ${provider} is not supported`)
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) throw error
  }

  public async signOut(): Promise<void> {
    const { error } = await supabase.auth.signOut()

    if (error) throw error
  }

  public async getSession() {
    const { data, error } = await supabase.auth.getSession()

    if (error) throw error

    if (!data.session) throw new SessionError('A valid session was not found for the user')

    return data.session
  }
}

import type { Session, User, WeakPassword } from '@supabase/supabase-js'
import type { LoginPayload } from '../schemas/login.schema'

export interface AuthApi {
  signIn(credentials: LoginPayload): Promise<SignInResponse>
  signUp(credentials: LoginPayload): Promise<SignUpResponse>
  signInWithOAuth(provider: OAuthProvider): Promise<void>
  signOut(): Promise<void>
  getSession(): Promise<Session>
}

export type OAuthProvider = 'google' | 'github' | 'discord'
export type SignUpResponse = {
  user: User | null
  session: Session | null
}
export type SignInResponse = {
  user: User
  session: Session
  weakPassword?: WeakPassword
}

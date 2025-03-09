export interface AuthState {
  [key: string]: unknown

  isLoggedIn: boolean
  token: Token | null
  refreshToken: RefreshToken | null
}

export type Token = string
export type RefreshToken = string

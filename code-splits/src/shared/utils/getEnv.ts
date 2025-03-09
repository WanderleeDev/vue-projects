import { EnvNotFoundError, MissingParamError } from '../class/customErros'

const ENV: Record<string, string> = {
  VITE_API_KEY_QUOTE: import.meta.env.VITE_API_KEY_QUOTE,
  VITE_PROJECT_URL: import.meta.env.VITE_PROJECT_URL,
  VITE_API_KEY_SUPABASE: import.meta.env.VITE_API_KEY_SUPABASE,
  VITE_CLOUD_NAME: import.meta.env.VITE_CLOUD_NAME,
  VITE_UPLOAD_PRESET: import.meta.env.VITE_UPLOAD_PRESET,
} as const

export type EnvTypes = keyof typeof ENV

export function getEnv(key: EnvTypes): string | never {
  if (!key) throw new MissingParamError('env param in function getEnv is required')
  if (!ENV[key]) throw new EnvNotFoundError(`Env ${key} not found`)

  return ENV[key]
}

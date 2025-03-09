import { inject, type InjectionKey } from 'vue'
import { InjectionError } from '../class/customErros'

export function safeInject<T>(key: InjectionKey<T>): T {
  const instance = inject(key)
  const message = `Could not inject dependency: ${key.description || 'Unknown key'}`

  if (!instance) throw new InjectionError(message)

  return instance
}

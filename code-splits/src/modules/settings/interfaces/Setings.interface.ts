import type { Font } from './Font.interface'

export interface SettingsState {
  [key: string]: unknown

  theme: Theme
  backgroundImage: string
  font: Font
}

export type Theme = 'light' | 'dark'

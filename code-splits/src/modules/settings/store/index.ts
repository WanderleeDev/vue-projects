import { defineStore } from 'pinia'
import type { Settings } from '../interfaces/Setings.interface'

const STORAGE_KEY = 'settings'
const defaultSettings: Settings = {
  theme: 'light',
  backgroundImage: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
  font: 'sans-serif',
}

export const useSettingStore = defineStore(STORAGE_KEY, {
  state: (): Settings => ({ ...defaultSettings }),

  getters: {
    isDark: (state) => state.theme === 'dark',
  },

  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    updateBackgroundImage(image: string) {
      this.backgroundImage = image
    },
    updateFont(font: string) {
      this.font = font
    },
    restoreDefault() {
      const hasChange = JSON.stringify(this.$state) !== JSON.stringify(defaultSettings)

      if (!hasChange) return

      this.$state = { ...defaultSettings }
    },
  },
})

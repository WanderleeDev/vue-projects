import { defineStore } from 'pinia'
import type { SettingsState, Theme } from '../interfaces/Setings.interface'
import { useTheme } from 'vuetify'
import { reactive, watch, toRefs } from 'vue'
import { useStorage } from '@vueuse/core'
import { fonts } from '../constants/fonts'

const STORAGE_KEY = 'settings'
const defaultSettings: SettingsState = {
  theme: 'light',
  backgroundImage: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
  font: fonts[0],
}

/**
 * Settings Store
 *
 * Este Pinia store maneja configuraciones de la aplicación incluyendo
 * tema, imagen de fondo y fuente.
 * Usa localStorage vía useStorage de VueUse para persistir configuraciones.
 */
export const useSettingStore = defineStore(STORAGE_KEY, () => {
  // Acceder al sistema de temas de Vuetify
  const { global } = useTheme()

  // Inicializar almacenamiento persistente con useStorage
  const storedSettings = useStorage<SettingsState>(
    STORAGE_KEY,
    { ...defaultSettings },
    localStorage,
    { mergeDefaults: true },
  )

  // Crear un objeto reactive con los valores almacenados
  const state = reactive<SettingsState>({ ...storedSettings.value })

  // Mantener sincronizado el estado con localStorage
  watch(
    state,
    (newSettings) => {
      storedSettings.value = { ...newSettings }
    },
    { deep: true },
  )

  // Sincronizar el tema de Vuetify con el almacenado
  watch(
    () => state.theme,
    (newTheme) => {
      global.name.value = newTheme
    },
    { immediate: true },
  )

  /**
   * Alterna entre temas claro y oscuro
   * Actualiza tanto el tema de Vuetify como el estado local
   */
  function toggleTheme() {
    state.theme = global.current.value.dark ? 'light' : 'dark'
    global.name.value = state.theme as Theme
  }

  /**
   * Resetear todas las configuraciones a valores por defecto
   */
  function resetSettings() {
    Object.assign(state, defaultSettings)
  }

  // Retornar API pública del store
  return {
    ...toRefs(state), // Permite desestructurar manteniendo reactividad
    state, // Expone el objeto state completo
    resetSettings,
    toggleTheme,
  }
})

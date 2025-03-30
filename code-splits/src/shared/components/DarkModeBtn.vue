<template>
  <v-btn
    v-bind="$attrs"
    @click="settingsStore.toggleTheme"
    :color
    :icon
    size="x-small"
    title="change theme"
  />
</template>

<script setup lang="ts">
import { useSettingStore } from '@/modules/settings/store'
import { computed } from 'vue'

const settingsStore = useSettingStore()

const icon = computed(() =>
  settingsStore.theme === 'light' ? 'mdi-white-balance-sunny' : 'mdi-weather-night',
)
const color = computed(() => (settingsStore.theme === 'light' ? 'indigo' : 'gray'))
</script>

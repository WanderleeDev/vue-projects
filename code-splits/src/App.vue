<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockNavigation from './shared/ui/DockNavigation.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { Toaster } from 'vue-sonner'
import { useSettingStore } from './modules/settings/store'
import { computed } from 'vue'

import '@fontsource-variable/roboto'
import '@fontsource-variable/open-sans'
import '@fontsource/lato'
import '@fontsource-variable/playfair'
import '@fontsource-variable/source-code-pro'

const settingsStore = useSettingStore()
const fontFamily = computed(() => settingsStore.font.family)
</script>

<template>
  <main class="content-center">
    <Toaster position="top-center" close-button richColors />
    <RouterView />
    <VueQueryDevtools />
    <DockNavigation :visible="true" />
  </main>
</template>

<style global>
body {
  --v-font-family: v-bind(fontFamily);
  font-family: var(--v-font-family) !important;
}
</style>

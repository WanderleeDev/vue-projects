<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockNavigation from './shared/ui/DockNavigation.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { Toaster } from 'vue-sonner'
</script>

<template>
  <main class="content-center">
    <Toaster position="top-center" close-button richColors />
    <RouterView />
    <VueQueryDevtools />
    <DockNavigation :visible="true" />
  </main>
</template>

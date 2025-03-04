<script setup lang="ts">
import { RouterView } from 'vue-router'
import DockNavigation from './shared/ui/DockNavigation.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <main class="content-center">
    <RouterView />
    <VueQueryDevtools />
    <DockNavigation :visible="true" />
  </main>
</template>

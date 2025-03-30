<template>
  <nav v-bind="$attrs" class="flex items-center space-x-4">
    <NuxtButton
      v-for="item in paths"
      :key="item.path"
      :to="item.path"
      :prefetch-on="{
        interaction: true,
        visibility: false,
      }"
      variant="ghost"
      active-class="dark:bg-green-600/40 bg-green-200/40"
      class="hidden sm:inline-flex"
    >
      {{ item.label }}
    </NuxtButton>

    <CommonDarkModeButton />
  </nav>
</template>

<script setup lang="ts">
import type { Paths } from "./Header.vue";

defineProps<{ paths: Paths[] }>();
</script>

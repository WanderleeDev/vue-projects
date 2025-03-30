<template>
  <ClientOnly v-if="!colorMode?.forced">
    <NuxtButton
      class="size-8"
      v-bind="$attrs"
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="subtle"
      size="xl"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="size-8 bg-gray-200 dark:bg-gray-600 rounded-md" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

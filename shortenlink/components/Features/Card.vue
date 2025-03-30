<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
    <div class="flex items-center mb-4">
      <NuxtIcon :name="icon" :class="`text-${color}-500 text-2xl mr-3`" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{ title }}
      </h3>
    </div>
    <p class="text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon: string;
  color: string;
}>();
</script>

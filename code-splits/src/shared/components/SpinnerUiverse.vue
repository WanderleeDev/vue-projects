<template>
  <!-- From Uiverse.io by Cybercom682  -->
  <div class="text-center">
    <div
      class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500 mx-auto"
    ></div>
    <h2 class="text-zinc-800 dark:text-zinc-800 mt-4 font-semibold">Loading...</h2>
    <p class="text-zinc-800 dark:text-zinc-800 mt-4 font-semibold" v-if="message">
      redirecting to {{ message }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message?: string
}>()
</script>

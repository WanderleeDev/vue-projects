<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-8">
    <h1
      class="text-2xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-700 via-blue-500 to-teal-400 text-transparent bg-clip-text text-center"
    >
      {{ '< Splits Code />' }}
    </h1>
    <p
      class="text-base sm:text-xl max-w-2xl mx-auto bg-gradient-to-r from-purple-900 via-blue-700 to-teal-600 text-transparent bg-clip-text text-center"
    >
      Optimize your application loading performance with efficient code splitting techniques
    </p>
    <v-btn
      class="mt-8 bg-red-600"
      @click="router.push('/dashboard')"
      color="#5865f2"
      append-icon="mdi-xml"
      >Start Coding</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="grid place-content-center h-full gap-8">
    <v-empty-state
      icon="mdi-magnify"
      text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
      title="We couldn't find a match."
    ></v-empty-state>
    <v-btn @click="redirectTo()" elevation="5" size="large">Go to home</v-btn>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const redirectTo = (path = '/') => router.push(path)
</script>

<template>
  <v-card
    class="d-flex flex-column align-center justify-center pa-8 h-100 text-center relative"
    image="https://res.cloudinary.com/dy8gpozi6/image/upload/v1741139794/banner_vjiald.webp"
  >
    <div class="absolute inset-0 bg-black/40 z-0"></div>
    <v-card-title class="text-h4 text-white mb-4 z-10"> New Here? </v-card-title>

    <v-card-text class="text-white mb-6 z-10">
      Sign up and discover a great amount of new opportunities!
    </v-card-text>

    <v-btn @click="router.push('signup')" variant="elevated" color="indigo"> Sign Up </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

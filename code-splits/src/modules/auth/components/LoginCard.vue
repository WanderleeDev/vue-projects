<template>
  <v-card
    class="d-flex flex-column align-center justify-center pa-8 h-100 text-center relative"
    image="https://res.cloudinary.com/dy8gpozi6/image/upload/v1741139794/banner_vjiald.webp"
  >
    <div class="absolute inset-0 bg-black/40 z-0"></div>
    <div class="bg-black/40 pa-6 backdrop-blur-xs rounded-md">
      <v-card-title class="text-h4 text-white mb-4 z-10"> Welcome Back! </v-card-title>

      <v-card-text class="text-white mb-6 z-10">
        Log in to access your account and continue exploring new opportunities!
      </v-card-text>

      <v-btn @click="router.push('/auth/login')" variant="elevated" color="indigo"> Login </v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

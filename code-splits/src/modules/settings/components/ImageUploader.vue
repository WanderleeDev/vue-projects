<template>
  <div class="flex flex-col gap-8">
    <h2 class="text-2xl font-bold flex items-center gap-2">
      <v-icon icon="mdi-progress-upload" class="opacity-80" />
      Too few images?
    </h2>
    <div class="flex flex-wrap gap-4 items-center" v-if="authStore.store.isLoggedIn">
      <p>Supported valid formats (PNG, JPG, WEBP, AVIF)</p>
      <v-btn color="#5865f2" v-on:click="openUploadWidget"> Upload image</v-btn>
    </div>

    <v-alert
      v-else
      class="max-w-3xl mx-auto"
      color="info"
      icon="$info"
      title="More features"
      text="
          You need to be logged in to upload images. Please login or register to upload images.
        "
    >
      <v-btn class="w-full mt-4" to="/auth/login" color="#5865f2" link>sign in</v-btn>
    </v-alert>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store'
import { getEnv } from '@/shared/utils/getEnv'

const authStore = useAuthStore()
const widget = window.cloudinary.createUploadWidget(
  {
    cloudName: getEnv('VITE_CLOUD_NAME'),
    uploadPreset: getEnv('VITE_UPLOAD_PRESET'),
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info)
    }
  },
)

const openUploadWidget = () => {
  if (!authStore.store.isLoggedIn) return

  widget?.open()
}
</script>

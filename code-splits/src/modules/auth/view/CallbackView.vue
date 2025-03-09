<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="p-8 text-center grid place-content-center gap-4">
      <template v-if="!hasError">
        <SpinnerUiverse :only-loader="true" />
        <h1 class="text-2xl font-bold mb-4">Processing</h1>
        <p class="text-gray-600">Please wait while we complete your authentication.</p>
      </template>
      <template v-else>
        <h1 class="text-2xl font-bold mb-4">Has Occurred Error</h1>
        <p class="text-gray-600">Redirecting to the home screen.</p>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SpinnerUiverse from '@/shared/components/SpinnerUiverse.vue'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { handleToastError } from '@/shared/utils/handleError'
import { useAuthStore } from '../store'

const router = useRouter()
const authStore = useAuthStore()
const hasError = ref(false)

onMounted(async () => {
  try {
    await authStore.getSessionUser()
    router.push('/dashboard')
  } catch (e) {
    handleToastError(e)
    setTimeout(() => {
      router.push('/auth/')
    }, 3000)
  }
})
</script>

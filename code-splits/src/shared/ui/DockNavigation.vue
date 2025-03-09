<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 transition-all duration-300 ease-in-out z-[99999]"
    :class="navClasses"
    :inert="!isVisible"
  >
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex items-center space-x-1 md:space-x-4">
          <RouterLink class="transition-colors" to="/" active-class="active">
            <v-btn variant="text" color="white" class="text-white"> Home </v-btn>
          </RouterLink>
          <RouterLink class="transition-colors" to="/dashboard" active-class="active">
            <v-btn variant="text" color="white" class="text-white"> dashboard </v-btn>
          </RouterLink>
          <RouterLink
            v-if="!authStore.store.isLoggedIn"
            class="transition-colors"
            to="/auth/login"
            active-class="active"
          >
            <v-btn variant="text" color="white" class="text-white"> login </v-btn>
          </RouterLink>
        </div>

        <div class="mt-2 md:mt-0 flex gap-8">
          <div class="flex gap-2">
            <v-btn
              @click="router.back"
              size="x-small"
              title="go back"
              rounded="lg"
              icon="mdi-arrow-left"
              color="indigo"
            />
            <v-btn
              @click="router.forward"
              size="x-small"
              title="go forward"
              rounded="lg"
              icon="mdi-arrow-right"
              color="indigo"
            />
          </div>
          <RouterLink class="block" to="redirect/github" :style="{ background: '#5865f2' }">
            <v-btn color="white" variant="text" append-icon="mdi-github"> GitHub </v-btn>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/modules/auth/store'

const authStore = useAuthStore()
const router = useRouter()
const isVisible = ref(false)
const navClasses = computed(() =>
  isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
)
let timeout: ReturnType<typeof setTimeout> | null = null

const handleNavbar = () => {
  if (timeout) clearTimeout(timeout)

  isVisible.value = true
  timeout = setTimeout(() => (isVisible.value = false), 3000)
}

onMounted(() => {
  document.addEventListener('mousemove', handleNavbar)
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
  document.removeEventListener('mousemove', handleNavbar)
})
</script>

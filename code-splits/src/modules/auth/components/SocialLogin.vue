<template>
  <div class="d-flex justify-center gap-4">
    <v-btn
      v-for="(network, index) in socialNetworks"
      :key="index"
      @click="authStore.signInUserWithOAuth(network.icon.replace('mdi-', '') as OAuthProvider)"
      :color="network.color"
      :icon="network.icon"
      variant="elevated"
    >
      <v-icon v-if="index < 2">{{ network.icon }}</v-icon>
      <DiscordIcon v-else />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import type { SocialIcon } from '../interface/SocialIcon.interface'
import DiscordIcon from '@/shared/components/DiscordIcon.vue'
import type { OAuthProvider } from '../interface/AuthApi.interface'
import { useAuthStore } from '../store'

const authStore = useAuthStore()

const socialNetworks: SocialIcon[] = [
  { icon: 'mdi-google', color: 'red' },
  { icon: 'mdi-github', color: 'black' },
  { icon: 'mdi-discord', color: '#5865f2' },
]
</script>

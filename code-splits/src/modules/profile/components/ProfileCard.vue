<template>
  <v-card class="text-center pa-4">
    <v-avatar size="120" class="mb-4">
      <v-img :src="userStore.image" alt="Profile picture"></v-img>
    </v-avatar>
    <div class="text-subtitle-1 text-medium-emphasis mb-1">{{ userStore.username }}</div>
    <div class="text-h6 mb-2">{{ userStore.firstName }} {{ userStore.lastName }}</div>
    <v-card-text class="text-body-2 text-medium-emphasis">
      {{ userStore.about }}
    </v-card-text>
    <v-btn color="success" variant="flat" block> FOLLOW </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { useProfileStore } from '../store'

const userStore = useProfileStore()
</script>

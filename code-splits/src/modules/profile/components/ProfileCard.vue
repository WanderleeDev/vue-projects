<template>
  <v-card class="text-center pa-4">
    <v-avatar size="120" class="mb-4">
      <v-img :src="image" alt="Profile picture"></v-img>
    </v-avatar>
    <div class="text-subtitle-1 text-medium-emphasis mb-1">{{ username }}</div>
    <div class="text-h6 mb-2">{{ firstName }} {{ lastName }}</div>
    <v-card-text class="text-body-2 text-medium-emphasis">
      {{ about }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { ProfileType } from '../schemas/Profile.schema'

// import type { ProfileCardInfo } from '../schemas/Profile.schema'

defineProps<ProfileType>()
</script>

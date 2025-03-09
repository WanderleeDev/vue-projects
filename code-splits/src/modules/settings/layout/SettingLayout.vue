<template>
  <v-empty-state
    class="pa-0"
    :headline="`Welcome${' ' + user.firstName}`"
    icon="$vuetify"
    title="Customize your experience to your liking"
  >
    <v-container class="pa-0">
      <slot />
    </v-container>
  </v-empty-state>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/modules/profile/store'

const user = useUserStore()
</script>

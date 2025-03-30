<template>
  <v-empty-state class="pa-0 py-8" :headline="`Welcome${' ' + user.firstName}`">
    <v-container class="pa-0 pt-8">
      <RouterView />
    </v-container>
  </v-empty-state>
</template>

<script lang="ts" setup>
import { useProfileStore } from '@/modules/profile/store'
import { RouterView } from 'vue-router'

const user = useProfileStore()
</script>

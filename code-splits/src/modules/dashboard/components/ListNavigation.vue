<template>
  <v-list density="compact" item-props :items="routes" nav>
    <template v-for="route in routes" :key="route.prependIcon">
      <v-list-item
        v-if="
          publicRoutes.includes(route.title.toLocaleLowerCase() as PublicRoutes) &&
          !authStore.store.isLoggedIn
        "
        link
        tag="anchor"
        :to="route.path"
        :prepend-icon="route.prependIcon"
        :title="route.title"
        active-class="bg-indigo-lighten-3 text-white"
      />
      <v-list-item
        v-if="authStore.store.isLoggedIn"
        link
        tag="anchor"
        :to="route.path"
        :prepend-icon="route.prependIcon"
        :title="route.title"
        active-class="bg-indigo-lighten-3 text-white"
      />
    </template>
  </v-list>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/modules/auth/store'
import type { Route } from '../interfaces/Route.interface'
import type { PublicRoutes } from '../constants/routes'

const publicRoutes: PublicRoutes[] = ['exercises', 'settings']
const authStore = useAuthStore()

defineProps<{
  routes: Route[]
}>()
</script>

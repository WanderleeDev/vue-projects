<template>
  <v-btn class="text-none me-2" height="48" icon slim>
    <v-avatar size="32">
      <v-img
        v-if="profileStore.image"
        :alt="profileStore.firstName"
        :src="profileStore.image"
      ></v-img>
    </v-avatar>

    <v-menu activator="parent">
      <v-list v-if="isAuthenticated" density="compact" nav>
        <v-list-item
          link
          tag="anchor"
          to="/dashboard/settings"
          append-icon="mdi-cog-outline"
          title="Settings"
        />

        <v-list-item
          link
          tag="anchor"
          to="/dashboard/profile"
          append-icon="mdi-card-account-details-outline"
          title="Profile"
        />

        <v-list-item
          @click="logoutUser"
          class="w-full"
          tag="button"
          variant="flat"
          append-icon="mdi-logout"
          base-color="indigo"
          title="logout"
        />
      </v-list>

      <v-list v-else density="compact" nav>
        <v-list-item
          link
          tag="anchor"
          to="/auth/login"
          variant="flat"
          append-icon="mdi-logout"
          base-color="red"
          title="login"
        />
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts" setup>
import { useProfileStore } from '@/modules/profile/store'
import { useAuthStore } from '@/modules/auth/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const profileStore = useProfileStore()
const authStore = useAuthStore()
const router = useRouter()
const isAuthenticated = computed(() => authStore.store.isLoggedIn)

async function logoutUser() {
  await authStore.signOutUser()
  router.push('/dashboard')
}
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" item-props :items="items" nav>
        <RouterLink
          class="block"
          v-for="item in items"
          :key="item.prependIcon"
          :to="item.path"
          active-class="bg-indigo-lighten-3 text-white"
        >
          <v-list-item :prepend-icon="item.prependIcon" link :title="item.title" />
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="ps-4" flat>
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />

      <v-app-bar-title tag="h1">Code Splits</v-app-bar-title>

      <template #append>
        <v-btn class="text-none me-2" height="48" icon slim>
          <v-avatar size="32" color="surface-light">
            <v-img
              v-if="profileStore.image"
              :alt="profileStore.firstName"
              :src="profileStore.image"
            ></v-img>
            <span v-else class="text-xs">{{ profileStore.userAcronym }}</span>
          </v-avatar>

          <v-menu activator="parent">
            <v-list density="compact" nav>
              <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

              <v-list-item @click="logout" append-icon="mdi-logout" link title="Logout" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main tag="section">
      <ParallaxContainer :src="settingsStore.backgroundImage">
        <div class="pa-4">
          <v-sheet
            class="backdrop-blur-xs pa-4"
            border="dashed md"
            color="#5865f240"
            min-height="700"
            rounded="lg"
            width="100%"
          >
            <RouterView />
          </v-sheet>
        </div>
      </ParallaxContainer>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProfileStore } from '@/modules/profile/store'
import ParallaxContainer from '@/shared/components/ParallaxContainer.vue'
import { RouterLink } from 'vue-router'
import { useSettingStore } from '@/modules/settings/store'
import { routesPages } from '../constants/routes'
import { safeInject } from '@/shared/utils/safeInject'
import { AUTH_API_SERVICE } from '@/modules/auth/services/auth.service'

const settingsStore = useSettingStore()
const profileStore = useProfileStore()
const authService = safeInject(AUTH_API_SERVICE)

const drawer = ref(true)
const items = ref(routesPages)

const logout = async () => {
  try {
    await authService.signOut()
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <ListNavigation :routes />
    </v-navigation-drawer>

    <v-app-bar class="ps-4" flat>
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="drawer = !drawer" />

      <v-app-bar-title tag="h1">Code Splits</v-app-bar-title>

      <template #append>
        <div class="flex gap-2 items-center">
          <DarkModeBtn size="large" density="comfortable" />
          <DropdownUser />
        </div>
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
import { useSettingStore } from '@/modules/settings/store'
import { routesPages } from '../constants/routes'
import ParallaxContainer from '@/modules/dashboard/components/ParallaxContainer.vue'
import ListNavigation from '../components/ListNavigation.vue'
import DropdownUser from '../components/DropdownUser.vue'
import DarkModeBtn from '@/shared/components/DarkModeBtn.vue'

const settingsStore = useSettingStore()
const drawer = ref(true)
const routes = ref(routesPages || [])
</script>

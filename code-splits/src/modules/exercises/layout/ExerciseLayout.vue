<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer">
      <v-list density="compact" item-props :items="items" nav>
        <RouterLink
          class="block"
          v-for="item in items"
          :key="item.prependIcon"
          :to="'/' + item.title.toLowerCase()"
          exact-active-class="bg-indigo-lighten-3 text-white"
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
          <v-avatar :title="firstName" color="surface-light" :image="image!" size="32">
            <span v-if="!image" class="text-xs">{{ userAcronym }}</span>
          </v-avatar>

          <v-menu activator="parent">
            <v-list density="compact" nav>
              <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

              <v-list-item append-icon="mdi-logout" link title="Logout" />
            </v-list>
          </v-menu>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main tag="section">
      <ParallaxContainer
        src="https://res.cloudinary.com/dy8gpozi6/image/upload/v1731553760/background6_c84sqk.webp"
      >
        <div class="pa-4">
          <v-sheet
            class="backdrop-blur-xs pa-4"
            border="dashed md"
            color="#5865f240"
            height="1000"
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
import { useUserStore } from '@/modules/user/store'
import { storeToRefs } from 'pinia'
import ParallaxContainer from '@/shared/components/ParallaxContainer.vue'
import { RouterLink } from 'vue-router'

const store = useUserStore()
const { image, firstName, userAcronym } = storeToRefs(store)

const drawer = ref(true)

const items = ref([
  {
    title: 'Exercises',
    prependIcon: 'mdi-xml',
  },
  {
    title: 'Settings',
    prependIcon: 'mdi-cog-outline',
  },
  {
    title: 'Account',
    prependIcon: 'mdi-card-account-details-outline',
  },
  {
    title: 'Favorites',
    prependIcon: 'mdi-cards-heart-outline',
  },
  {
    title: 'Contributions',
    prependIcon: 'mdi-code-block-braces',
  },
])
</script>

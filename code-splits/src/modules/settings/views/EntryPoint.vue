<template>
  <v-row>
    <v-col v-for="{ path, prependIcon, text, title } in subRoutes" :key="title" cols="12" md="6">
      <RouterLink :to="path">
        <v-card class="relative group" :text :title>
          <v-icon
            class="opacity-10 group-hover:-translate-x-16 top-2/4 -translate-y-2/4 transition-transform bottom-0 right-2 scale-[3]"
            style="position: absolute"
            :icon="prependIcon"
          ></v-icon>
        </v-card>
      </RouterLink>
    </v-col>
  </v-row>
  <ResetDialog />
</template>

<script setup lang="ts">
import type { CardData } from '../interfaces/CardItem.interface'
import ResetDialog from '../components/ResetDialog.vue'

const subRoutes: CardData[] = [
  {
    path: 'settings/background',
    prependIcon: 'mdi-folder-multiple-image',
    text: 'Choose from our options or upload your favorite background',
    title: 'Background',
  },
  {
    path: 'settings/fonts',
    prependIcon: 'mdi-format-font',
    text: 'Customize to a font more to your liking',
    title: 'Fonts',
  },
  {
    path: 'settings/suggestions',
    prependIcon: 'mdi-at',
    text: 'Your contributions help us to continue improving',
    title: 'Suggestions',
  },
  {
    path: 'settings',
    prependIcon: 'mdi-restore-alert',
    text: 'Create a new bin to store your code',
    title: 'Restore settings',
  },
]
</script>

<template>
  <v-container class="py-8">
    <h1 class="text-3xl font-bold mb-6">My Favorites</h1>

    <v-card class="pa-4">
      <SearchBar v-model="searchQuery" />
      <FavoritesList :favorites="favorites" :search-query="searchQuery" />
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Favorite } from '../components/FavoritesList.vue'
import SearchBar from '../components/SearchBar.vue'
import FavoritesList from '../components/FavoritesList.vue'

const searchQuery = ref('')

const favorites = ref<Favorite[]>([
  {
    id: 1,
    title: 'Vue.js Documentation',
    description: 'Official Vue.js documentation and guides',
    category: 'Development',
    dateAdded: new Date('2024-01-15'),
  },
  {
    id: 2,
    title: 'TypeScript Handbook',
    description: 'Complete guide to TypeScript features',
    category: 'Learning',
    dateAdded: new Date('2024-01-20'),
  },
  {
    id: 3,
    title: 'Vuetify Components',
    description: 'Material Design component library for Vue',
    category: 'UI/UX',
    dateAdded: new Date('2024-02-01'),
  },
])
</script>

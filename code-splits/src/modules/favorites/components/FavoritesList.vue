<script setup lang="ts">
import { computed } from 'vue'

export interface Favorite {
  id: number
  title: string
  description: string
  category: string
  dateAdded: Date
}

const props = defineProps<{
  favorites: Favorite[]
  searchQuery: string
}>()

const filteredFavorites = computed(() => {
  return props.favorites.filter(
    (favorite) =>
      favorite.title.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      favorite.description.toLowerCase().includes(props.searchQuery.toLowerCase()),
  )
})
</script>

<template>
  <v-list>
    <v-list-item
      v-for="favorite in filteredFavorites"
      :key="favorite.id"
      :title="favorite.title"
      :subtitle="favorite.description"
      class="mb-2 rounded-lg item"
    >
      <template v-slot:prepend>
        <v-icon icon="mdi-star" color="amber" />
      </template>
      <template v-slot:append>
        <v-chip size="small" color="primary" class="ml-2">
          {{ favorite.category }}
        </v-chip>
      </template>
    </v-list-item>
  </v-list>
</template>

<style scoped>
.item {
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.7;
  }
}
</style>

<template>
  <v-card
    class="mb-2 w-[min(100%,25rem)]"
    density="compact"
    :prepend-avatar="author_image || '/unknown-user.webp'"
    :subtitle="author"
    :title="name"
    color="whitesmoke"
    border
  >
    <v-img v-if="thumbnail" height="128" :src="thumbnail" cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="indigo" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>

    <div v-else height="128">
      <strong class="text-2xl text-center block">{{ name }}</strong>
    </div>

    <v-card-text class="text-pretty" :title="description">
      {{ description.length > 95 ? `${description.slice(0, 90)}...` : description }}
    </v-card-text>

    <template v-slot:actions>
      <v-btn @click="router.push(`/dashboard/exercises/${id}`)" color="primary" variant="text"
        >View More</v-btn
      >
      <v-btn @click="favoriteToggle()" color="primary" variant="text" icon="mdi-heart" />
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import type { Exercise } from '../../../../types'
import { useRouter } from 'vue-router'

defineProps<Exercise>()

const router = useRouter()

const favoriteToggle = () => {
  console.log('add')
}
</script>

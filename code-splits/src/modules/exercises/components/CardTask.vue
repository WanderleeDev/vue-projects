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
    <v-img v-if="thumbnail" height="128" :src="thumbnail" cover />
    <div v-else height="128">
      <strong class="text-2xl text-center block">{{ name }}</strong>
    </div>

    <v-card-text class="text-pretty" :title="description">
      {{ description.length > 95 ? `${description.slice(0, 90)}...` : description }}
    </v-card-text>

    <template v-slot:actions>
      <v-btn @click="router.push(`/exercises/${id}`)" color="primary" variant="text"
        >View More</v-btn
      >

      <v-btn color="primary" variant="text">See in Map</v-btn>
    </template>
  </v-card>
</template>

<script lang="ts" setup>
import type { Exercise } from '../../../../types'
import { useRouter } from 'vue-router'

defineProps<Exercise>()

const router = useRouter()
</script>

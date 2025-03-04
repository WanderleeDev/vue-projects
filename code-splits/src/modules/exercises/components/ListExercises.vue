<template>
  <div>
    <SpinnerUiverse v-if="isLoading" />

    <v-alert
      v-bind="$attrs"
      v-else-if="error"
      color="#C51162"
      icon="mdi-material-design"
      :title="error.name"
      :text="error.message"
    >
      <v-btn @click="refetch">Refresh</v-btn>
    </v-alert>

    <div v-bind="$attrs" v-else-if="!data || data?.length === 0">sin tareas</div>

    <div
      v-else
      v-bind="$attrs"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
    >
      <CardTask v-bind="exercise" v-for="exercise in data" :key="exercise.id" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ExerciseManager } from '@/services/exerciseManager.service'
import CardTask from './CardTask.vue'
import { useQuery } from '@tanstack/vue-query'
import SpinnerUiverse from '@/shared/components/SpinnerUiverse.vue'

const { isLoading, data, error, refetch } = useQuery({
  queryKey: ['exercises'],
  queryFn: async () => {
    const { data, error } = await ExerciseManager.getInstance().getAllExercises()

    if (error) throw new Error(error.message)

    return data
  },
})
</script>

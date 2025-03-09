<template>
  <v-card class="p-6">
    <h2 class="text-2xl font-bold mb-6">Submit Exercise Suggestion</h2>

    <form @submit.prevent="submitForm" class="space-y-6">
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Categories</label>
        <Multiselect
          v-model="selectedCategories"
          :options="categories"
          :multiple="true"
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="false"
          placeholder="Select categories"
          class="custom-multiselect"
          :options-label="'label'"
          :options-value="'value'"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Difficulty Level</label>
        <v-select
          v-model="selectedDifficulty"
          :items="difficultyLevels"
          item-title="label"
          item-value="value"
          variant="outlined"
          placeholder="Select difficulty"
          hide-details
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">Description</label>
        <v-textarea
          v-model="description"
          variant="outlined"
          placeholder="Describe your exercise suggestion..."
          rows="5"
          hide-details
          class="mt-1"
        />
      </div>

      <v-btn
        color="primary"
        type="submit"
        block
        :disabled="!selectedCategories.length || !selectedDifficulty || !description"
      >
        Submit Suggestion
      </v-btn>
    </form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from 'vue-multiselect'

export interface Suggestion {
  id: number
  categories: string[]
  description: string
  difficultyLevel: string
  submittedAt: Date
}

export interface Category {
  value: string
  label: string
}

export interface DifficultyLevel {
  value: string
  label: string
}

const categories = ref<Category[]>([
  { value: 'algorithms', label: 'Algorithms' },
  { value: 'data-structures', label: 'Data Structures' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'database', label: 'Database' },
  { value: 'system-design', label: 'System Design' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
])

const difficultyLevels = ref<DifficultyLevel[]>([
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
  { value: 'expert', label: 'Expert' },
])

const selectedCategories = ref<string[]>([])
const selectedDifficulty = ref<string>('')
const description = ref<string>('')

const submitForm = () => {
  const suggestion = {
    categories: selectedCategories.value,
    difficultyLevel: selectedDifficulty.value,
    description: description.value,
    submittedAt: new Date(),
  }

  console.log('Submitted suggestion:', suggestion)
  // Here you would typically send this to your backend

  // Reset form
  selectedCategories.value = []
  selectedDifficulty.value = ''
  description.value = ''
}
</script>

<style>
.custom-multiselect {
  --ms-tag-bg: #5865f2;
  --ms-tag-color: #ffffff;
  --ms-ring-color: #5865f2;
  --ms-option-bg-selected: #5865f2;
}
</style>

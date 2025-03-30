<template>
  <v-card class="max-w-2xl mx-auto pa-4">
    <h1 class="text-3xl font-bold my-6 text-center">Exercise Suggestions</h1>
    <p class="text-gray-600 mb-8 text-center">
      Help us improve our coding exercises platform by submitting your suggestions for new
      programming challenges.
    </p>
    <SuggestionForm />
  </v-card>
</template>

<script lang="ts" setup>
import SuggestionForm from '../components/SuggestionForm.vue'
</script>

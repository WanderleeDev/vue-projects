<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-8 text-center">Exercise Suggestions</h1>
    <p class="text-gray-600 mb-8 text-center">
      Help us improve our coding exercises platform by submitting your suggestions for new
      programming challenges.
    </p>
    <SuggestionForm />
  </div>
</template>

<script lang="ts" setup>
import SuggestionForm from '../components/SuggestionForm.vue'
</script>

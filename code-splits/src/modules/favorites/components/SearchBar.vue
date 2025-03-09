<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <v-text-field
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    prepend-inner-icon="mdi-magnify"
    label="Search favorites..."
    single-line
    hide-details
    variant="outlined"
    density="comfortable"
    class="mb-4"
  />
</template>

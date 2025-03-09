<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Font } from '../interfaces/Font.interface'
import { fonts } from '../constants/fonts'

const listFonts = ref<Font[]>(fonts)

const selectedFont = ref<string>('roboto')
const customText = ref<string>('Type your text here to preview the font...')

const fontStyle = computed(() => {
  const font = listFonts.value.find((f) => f.value === selectedFont.value)
  return {
    fontFamily: font?.family || 'inherit',
  }
})
</script>

<template>
  <v-card class="font-customizer pa-6">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold mb-2">Font Customizer</h2>
      <p class="text-gray-600">Select a font and preview your text in different styles</p>
    </div>

    <div class="mb-6">
      <v-select
        v-model="selectedFont"
        :items="listFonts"
        item-title="label"
        item-value="value"
        label="Select Font"
        variant="outlined"
        hide-details
        class="mb-4"
      />

      <v-text-field
        v-model="customText"
        label="Enter your text"
        variant="outlined"
        hide-details
        class="mb-6"
      />
    </div>

    <v-card class="preview-card pa-6" variant="outlined">
      <h3 class="text-lg font-medium mb-2">Preview</h3>
      <div class="preview-text" :style="fontStyle">
        <p class="text-xl mb-4">{{ customText }}</p>
        <div class="sample-text">
          <p class="mb-2">The quick brown fox jumps over the lazy dog</p>
          <p class="text-2xl mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>1234567890!@#$%^&*()</p>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<style scoped>
.font-customizer {
  max-width: 800px;
  margin: 0 auto;
}

.preview-card {
  background-color: #f8f9fa;
}

.preview-text {
  transition: all 0.3s ease;
}

.sample-text {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
}
</style>

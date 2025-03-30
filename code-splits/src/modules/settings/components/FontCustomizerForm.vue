<template>
  <v-card class="pa-6" max-width="650">
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

    <v-card class="pa-6" variant="outlined">
      <h3 class="text-lg font-medium mb-2">Preview</h3>
      <div
        :style="{
          fontFamily: currentFont?.family,
        }"
      >
        <p class="text-xl mb-4 text-pretty">{{ customText }}</p>
        <div class="sample-text mt-8 pt-4 border-t-[.1rem] border-[#e2e8f0] text-[#64748b]">
          <p class="mb-2">The quick brown fox jumps over the lazy dog</p>
          <p class="text-2xl mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>1234567890!@#$%^&*()</p>
        </div>
      </div>
    </v-card>
    <v-btn @click="applyFont" color="indigo" class="mt-6 w-full" size="large"> Apply font </v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Font } from '../interfaces/Font.interface'
import { fonts } from '../constants/fonts'
import { useSettingStore } from '../store'

const { state, $patch } = useSettingStore()
const listFonts = ref<Font[]>(fonts)
const selectedFont = ref(state.font.value)
const customText = ref<string>('Type your text here to preview the font...')
const currentFont = computed<Font | undefined>(() => {
  return listFonts.value.find((font) => selectedFont.value === font.value)
})

const applyFont = () => {
  if (!currentFont.value) return

  $patch({ font: currentFont.value })
}
</script>

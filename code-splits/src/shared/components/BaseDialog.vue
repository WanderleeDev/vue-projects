<template>
  <div v-bind="$attrs">
    <v-btn @click="dialog = true" aria-label="close modal"> {{ textBtn }}</v-btn>

    <v-dialog v-model="dialog" width="auto">
      <div class="flex flex-row-reverse gap-2">
        <v-btn
          class=""
          @click="dialog = false"
          color="#5865f2"
          variant="elevated"
          aria-label="close modal"
          prepend-icon="mdi"
          icon="mdi-close-thick"
        ></v-btn>
        <slot />
      </div>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  textBtn: string
}

defineProps<Props>()

const dialog = ref(false)
</script>

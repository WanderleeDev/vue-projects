<template>
  <div v-bind="$attrs">
    <div class="contents" @click="openDialog" aria-label="open modal">
      <slot name="btn">
        <v-btn> {{ textBtn }}</v-btn>
      </slot>
    </div>

    <v-dialog v-model="dialog" width="auto">
      <div class="flex flex-row-reverse gap-2">
        <v-btn
          v-if="closable"
          class=""
          @click="closeDialog"
          color="#5865f2"
          variant="elevated"
          aria-label="close modal"
          prepend-icon="mdi"
          icon="mdi-close-thick"
        ></v-btn>
        <slot name="default" :close="closeDialog" />
      </div>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  textBtn: string
  closable?: boolean
}>()

const dialog = ref(false)

defineExpose({
  openDialog,
  closeDialog,
})

function openDialog() {
  dialog.value = true
}

function closeDialog() {
  dialog.value = false
}
</script>

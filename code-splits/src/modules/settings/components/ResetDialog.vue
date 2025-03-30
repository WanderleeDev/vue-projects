<template>
  <BaseDialog ref="dialogRef" text-btn="reset">
    <template #btn>
      <div class="flex justify-center">
        <v-btn
          class="my-12 w-full md:w-auto"
          variant="elevated"
          color="red"
          append-icon="mdi-restore-alert"
          size="x-large"
        >
          Restore settings
        </v-btn>
      </div>
    </template>

    <v-card
      class="mx-auto"
      max-width="450"
      :text
      :title
      prepend-icon="mdi-alert"
      color="#ff6d63"
      hover
    >
      <template v-slot:actions>
        <v-btn @click="dialogRef?.closeDialog" height="48"> Preserve Settings </v-btn>

        <v-btn @click="restoreSettings" class="flex-grow-1" height="48" variant="tonal">
          Reset
        </v-btn>
      </template>
    </v-card>
  </BaseDialog>
</template>

<script lang="ts" setup>
import BaseDialog from '@/shared/components/BaseDialog.vue'
import { useSettingStore } from '../store'
import { ref, useTemplateRef } from 'vue'

const { resetSettings } = useSettingStore()
const dialogRef = useTemplateRef('dialogRef')
const title = ref('Caution')
const text = ref('Changes made to configuration will be restored to their original values')

const restoreSettings = () => {
  resetSettings()
  dialogRef.value?.closeDialog()
}
</script>

<style></style>

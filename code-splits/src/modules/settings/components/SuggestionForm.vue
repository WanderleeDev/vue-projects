<template>
  <v-form @submit.prevent="submitForm">
    <div>
      <v-select
        v-model="reason"
        :error-messages="reasonError"
        :items="options"
        item-title="label"
        item-value="value"
        label="Reason"
        variant="outlined"
        hide-details
        class="mb-4"
      />

      <v-textarea
        v-model="description"
        :error-messages="descriptionError"
        label="Describe your exercise suggestion"
        variant="outlined"
        hide-details
        class="mb-6"
      />

      <v-btn
        :disabled="!meta.valid || isSubmitting"
        :loading
        color="indigo"
        type="submit"
        block
        size="large"
      >
        Submit Suggestion
      </v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { suggestionOptions } from '../constants/suggestionOptions'
import { useField, useForm } from 'vee-validate'
import { suggestionSchema, validationSuggestionSchema } from '../schemas/suggestion.schema'
import { handleToastError } from '@/shared/utils/handleError'

const options = ref(suggestionOptions)
const { handleSubmit, resetForm, meta, isSubmitting } = useForm({
  validationSchema: validationSuggestionSchema,
  initialValues: {
    reason: '',
    description: '',
  },
})
const { value: reason, errorMessage: reasonError } = useField('reason')
const { value: description, errorMessage: descriptionError } = useField('description')
const loading = ref(false)

const submitForm = handleSubmit(async (values) => {
  loading.value = true

  try {
    const parsedValues = suggestionSchema.safeParse(values)
    console.log(values)

    if (!parsedValues.success) return
    resetForm()
  } catch (e) {
    handleToastError(e)
  } finally {
    loading.value = false
  }
})
</script>

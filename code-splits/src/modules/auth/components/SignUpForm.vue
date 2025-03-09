<template>
  <v-card class="pa-4 mx-auto" elevation="0" max-width="500">
    <v-card-title class="text-h4 font-weight-bold text-center mb-4">
      {{ !hasVerifiedEmail ? 'Create Your Account' : 'Verify your email' }}
    </v-card-title>

    <v-form v-if="!hasVerifiedEmail" @submit="onSubmit">
      <v-text-field
        v-model="email"
        label="Email"
        :error-messages="emailError"
        type="email"
        variant="outlined"
        bg-color="grey-lighten-4"
        class="mb-4"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :error-messages="passwordError"
        variant="outlined"
        bg-color="grey-lighten-4"
        class="mb-4"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <v-text-field
        v-model="confirmPassword"
        label="Confirm Password"
        :type="showConfirmPassword ? 'text' : 'password'"
        :error-messages="confirmPasswordError"
        variant="outlined"
        bg-color="grey-lighten-4"
        class="mb-4"
        :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showConfirmPassword = !showConfirmPassword"
      ></v-text-field>

      <v-btn
        :disabled="!meta.valid || isSubmitting"
        :loading
        color="indigo"
        size="large"
        block
        type="submit"
      >
        Sign Up
      </v-btn>
    </v-form>

    <div v-else class="text-center starting:opacity-0 transition-opacity">
      <a class="underline text-blue-500" :href="`https://mail.google.com/mail`">
        {{ email }}
      </a>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { AUTH_API_SERVICE } from '../services/auth.service'
import { safeInject } from '@/shared/utils/safeInject'
import { signupSchema, validationSignupSchema } from '../schemas/register.schema'
import { handleToastError } from '@/shared/utils/handleError'

const { handleSubmit, meta, isSubmitting } = useForm({
  validationSchema: validationSignupSchema,
  initialValues: {
    email: '',
    password: '',
    confirmPassword: '',
  },
})
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword')
const authService = safeInject(AUTH_API_SERVICE)
const loading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const hasVerifiedEmail = ref(false)

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  const parseValues = signupSchema.safeParse(values)

  if (!parseValues.success) return

  try {
    await authService.signUp({
      email: parseValues.data.email,
      password: parseValues.data.password,
    })

    hasVerifiedEmail.value = true
  } catch (e) {
    handleToastError(e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <v-card class="pa-4 mx-auto" elevation="0" max-width="500">
    <v-card-title class="text-h4 font-weight-bold text-center mb-4">
      Login to Your Account
    </v-card-title>

    <v-card-subtitle class="text-center mb-6"> Login using social networks </v-card-subtitle>

    <SocialLogin class="mb-6" />

    <v-card-text class="text-center text-body-2 mb-4"> OR </v-card-text>

    <v-form @submit="onSubmit">
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
        class="mb-6"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="showPassword = !showPassword"
      ></v-text-field>

      <v-btn
        :disabled="!meta.valid || isSubmitting"
        :loading
        color="indigo"
        size="large"
        block
        type="submit"
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SocialLogin from './SocialLogin.vue'
import { useField, useForm } from 'vee-validate'
import { validationLoginSchema, loginSchema } from '../schemas/login.schema'
import { useAuthStore } from '../store'
import { handleToastError } from '@/shared/utils/handleError'

const authStore = useAuthStore()
const { handleSubmit, meta, isSubmitting, resetForm } = useForm({
  validationSchema: validationLoginSchema,
  initialValues: {
    email: '',
    password: '',
  },
})
const { value: email, errorMessage: emailError } = useField('email')
const { value: password, errorMessage: passwordError } = useField('password')
const loading = ref(false)
const showPassword = ref(false)

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  const parseValues = loginSchema.safeParse(values)

  if (!parseValues.success) return

  try {
    await authStore.login(parseValues.data)
    resetForm()
  } catch (e) {
    handleToastError(e)
  } finally {
    loading.value = false
  }
})
</script>

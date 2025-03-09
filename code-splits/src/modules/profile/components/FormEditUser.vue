<template>
  <v-form @submit.prevent="onSubmit()">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="username"
            :error-messages="usernameError"
            label="User Name"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            :error-messages="emailError"
            label="Email Address"
            type="email"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="firstName"
            :error-messages="firstNameError"
            label="First Name"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="lastName"
            :error-messages="lastNameError"
            label="Last Name"
            variant="outlined"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-textarea
            no-resize
            v-model="about"
            :error-messages="aboutError"
            label="About Me"
            variant="outlined"
            rows="4"
          ></v-textarea>
        </v-col>
        <v-col>
          <v-btn
            :disabled="!meta.valid || isSubmitting"
            :loading
            append-icon="mdi-pencil"
            color="indigo"
            size="large"
            type="submit"
            block
          >
            Edit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { profileBaseSchema, validationProfileSchema } from '../schemas/Profile.schema'
import { useProfileStore } from '../store'
import { safeInject } from '@/shared/utils/safeInject'
import { PROFILE_API_SERVICE } from '../services/ProfileApi.service'
import { ref } from 'vue'

const userStore = useProfileStore()
const { handleSubmit, meta, isSubmitting } = useForm({
  initialValues: userStore.$state,
  validationSchema: validationProfileSchema,
})
const profileApiService = safeInject(PROFILE_API_SERVICE)
const loading = ref(false)

const { value: username, errorMessage: usernameError } = useField('username')
const { value: email, errorMessage: emailError } = useField('email')
const { value: firstName, errorMessage: firstNameError } = useField('firstName')
const { value: lastName, errorMessage: lastNameError } = useField('lastName')
const { value: about, errorMessage: aboutError } = useField('about')

const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  console.log('a')

  const parsedValues = profileBaseSchema.safeParse(values)

  if (parsedValues.error) return

  try {
    const updatedData = await profileApiService.updateProfile(parsedValues.data)
    userStore.updateUser(updatedData)
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
})
</script>

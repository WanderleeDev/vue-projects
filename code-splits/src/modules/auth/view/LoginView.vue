<template>
  <AuthLayout>
    <template #form>
      <LoginForm />
    </template>
    <template #chart>
      <SignUpCard />
    </template>
  </AuthLayout>
</template>

<script lang="ts" setup>
import SignUpCard from '../components/SignUpCard.vue'
import LoginForm from '../components/SignInForm.vue'
import AuthLayout from '../layout/AuthLayout.vue'
</script>

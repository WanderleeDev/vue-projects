<template>
  <AuthLayout>
    <template #form>
      <RegisterForm />
    </template>

    <template #chart>
      <LoginCard />
    </template>
  </AuthLayout>
</template>

<script lang="ts" setup>
import LoginCard from '../components/LoginCard.vue'
import RegisterForm from '../components/SignUpForm.vue'
import AuthLayout from '../layout/AuthLayout.vue'
</script>

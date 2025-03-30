<template>
  <NuxtLayout name="auth">
    <div>
      <header class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Recover Password
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Enter your email address and we will send you instructions to reset
          your password.
        </p>
      </header>

      <AuthRecoveryAccountForm />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Recovery account" });
</script>

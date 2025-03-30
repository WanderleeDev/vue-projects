<template>
  <NuxtLayout name="auth">
    <div>
      <header class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Create Account
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Do you already have an account?
          <NuxtLink
            to="/auth/signIn"
            class="text-emerald-500 hover:text-emerald-600"
          >
            Log In
          </NuxtLink>
        </p>
      </header>

      <AuthSingUpForm />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Sign up" });
</script>

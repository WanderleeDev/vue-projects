<template>
  <NuxtLayout name="auth">
    <div>
      <header class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
          Sign In
        </h2>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Don't have an account?
          <NuxtLink
            to="/auth/signUp"
            class="text-emerald-500 hover:text-emerald-600"
          >
            Register
          </NuxtLink>
        </p>
      </header>

      <AuthSingInForm />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Sign in" });
</script>

<template>
  <footer class="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col gap-4 md:flex-row justify-between items-center">
        <CommonLogoPage />

        <div class="flex gap-6 flex-wrap justify-center">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.path"
            :external="true"
            href="#"
            class="text-gray-600 dark:text-gray-300 hover:text-emerald-500"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <div class="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
        <ClientOnly>
          © {{ new Date().getFullYear() }} LinkShort. All rights reserved.
        </ClientOnly>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { label: "Términos", path: "/terminos" },
  { label: "Privacidad", path: "/privacidad" },
  { label: "Contacto", path: "/contacto" },
];
</script>

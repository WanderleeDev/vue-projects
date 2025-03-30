<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <div class="flex flex-col items-center mb-8">
          <NuxtImg
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Foto de perfil"
            class="mb-4 rounded-full size-24 sm:size-36"
          />
          <h2
            class="text-2xl font-bold text-gray-900 dark:text-white text-center"
          >
            {{ profile.name }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 hidden sm:block">
            {{ profile.email }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-8">
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-2xl font-bold text-emerald-500">
              {{ profile.stats.links }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              Links created
            </div>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-2xl font-bold text-emerald-500">
              {{ profile.stats.clicks }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              Total clicks
            </div>
          </div>
          <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-2xl font-bold text-emerald-500">
              {{ profile.stats.memberSince }}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-300">
              Member since
            </div>
          </div>
        </div>

        <ProfileLinksList :links="profile.links" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Profile" });

const profile = {
  name: "Carlos Rodriguez",
  email: "carlos.rodriguez@ejemplo.com",
  stats: {
    links: "1,234",
    clicks: "45.2K",
    memberSince: "Ene 2024",
  },
  links: [
    {
      originalUrl:
        "https://www.ejemplo.com/articulo/como-crear-contenido-efectivo-para-redes-sociales-en-2024",
      shortUrl: "linkshort.co/ab12cd",
      date: "15 Feb 2024",
      clicks: "1234",
    },
    {
      originalUrl:
        "https://www.ejemplo.com/blog/10-mejores-practicas-para-optimizacion-seo-2024",
      shortUrl: "linkshort.co/ef34gh",
      date: "14 Feb 2024",
      clicks: "856",
    },
    {
      originalUrl:
        "https://www.ejemplo.com/guia/marketing-digital-para-principiantes",
      shortUrl: "linkshort.co/ij56kl",
      date: "13 Feb 2024",
      clicks: "2431",
    },
    {
      originalUrl: "https://www.ejemplo.com/curso/desarrollo-web-fullstack",
      shortUrl: "linkshort.co/mn78op",
      date: "12 Feb 2024",
      clicks: "1567",
    },
  ],
};
</script>

<template>
  <main class="container mx-auto px-4 py-12">
    <section class="text-center max-w-4xl mx-auto">
      <h2
        class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Shorten your links in seconds
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-12">
        The fastest and most secure way to share your links
      </p>

      <div class="mb-16">
        <LazyShortenLinkForm hydrate-on-interaction />
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <NuxtCard v-for="feature in features" :key="feature.title">
          <template #header>
            <div class="flex justify-center">
              <Icon :name="feature.icon" class="text-4xl text-emerald-500" />
            </div>
          </template>
          <template #title>
            {{ feature.title }}
          </template>
          <template #description>
            {{ feature.description }}
          </template>
        </NuxtCard>
      </div>

      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div
          v-for="stat in stats"
          :key="stat.value"
          class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <div class="text-4xl font-bold text-emerald-500 mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Home" });

const features = [
  {
    icon: "heroicons:link",
    title: "Custom Links",
    description: "Create short and personalized links for your brand",
  },
  {
    icon: "heroicons:shield-check",
    title: "Maximum Security",
    description: "Advanced protection against threats and spam",
  },
  {
    icon: "heroicons:chart-bar",
    title: "Detailed Analytics",
    description: "Analyze the performance of your links",
  },
];

const stats = [
  { value: "10M+", label: "Links Shortened" },
  { value: "50K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
];
</script>

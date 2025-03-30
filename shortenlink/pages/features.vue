<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Advanced Features
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Everything you need to manage and optimize your links
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-16">
      <FeaturesCard
        v-for="feature in features"
        :key="feature.title"
        v-bind="feature"
      />
    </div>

    <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 md:p-12">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Real-Time Analytics
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Get detailed information about the performance of your links
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="stat in analytics"
          :key="stat.title"
          class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
        >
          <NuxtIcon :name="stat.icon" class="text-emerald-500 text-2xl mb-4" />
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ stat.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Features" });

const features = [
  {
    title: "Custom Links",
    description: "Create short and memorable URLs that reflect your brand",
    icon: "heroicons:link",
    color: "emerald",
  },
  {
    title: "QR Codes",
    description: "Generate QR codes for your shortened links",
    icon: "heroicons:qr-code",
    color: "emerald",
  },
  {
    title: "Link Protection",
    description: "Secure your links with password and expiration",
    icon: "heroicons:shield-check",
    color: "emerald",
  },
  {
    title: "API Integration",
    description: "Connect with our API to automate processes",
    icon: "heroicons:code-bracket",
    color: "emerald",
  },
];

const analytics = [
  {
    title: "Geography",
    description: "Know the location of your visitors",
    icon: "heroicons:globe-americas",
  },
  {
    title: "Devices",
    description: "Analyze which devices access",
    icon: "heroicons:device-phone-mobile",
  },
  {
    title: "Trends",
    description: "Visualize traffic patterns",
    icon: "heroicons:chart-bar",
  },
];
</script>

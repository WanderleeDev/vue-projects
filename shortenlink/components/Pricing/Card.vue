<template>
  <div :class="['rounded-xl p-8 shadow-sm border flex flex-col', popularStyle]">
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {{ name }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300 mb-4">
        {{ description }}
      </p>
      <div class="flex justify-center items-baseline">
        <span class="text-4xl font-bold text-gray-900 dark:text-white">
          ${{ price }}
        </span>
        <span class="text-gray-500 dark:text-gray-400 ml-1">/mes</span>
      </div>
    </div>

    <ul class="space-y-4 mb-8">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-center text-gray-600 dark:text-gray-300"
      >
        <NuxtIcon
          name="lucide:circle-check"
          class="text-emerald-500 mr-2 text-lg"
        />
        {{ feature }}
      </li>
    </ul>

    <NuxtButton
      :variant="popular ? 'solid' : 'outline'"
      class="w-full mt-auto"
      size="lg"
    >
      {{ cta }}
    </NuxtButton>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}>();

const popularStyle = computed(() =>
  props.popular
    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
);
</script>

<!-- :color="popular ? 'emerald' : 'gray'" -->

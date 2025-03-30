<template>
  <article v-bind="$attrs">
    <h3
      class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8"
    >
      Frequently Asked Questions
    </h3>
    <div class="max-w-3xl mx-auto space-y-4">
      <LazyNuxtAccordion
        v-for="faq in faqs"
        :key="faq.label"
        hydrate-on-visible
        :items="[faq]"
        variant="white"
        type="single"
      />
    </div>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  faqs: {
    label: string;
    icon: string;
    content: string;
  }[];
}>();
</script>

<template>
  <NuxtDrawer
    v-model:open="open"
    v-bind="$attrs"
    direction="right"
    inset
    :handle="false"
    :ui="{
      header: 'flex justify-between gap-2 items-center',
      content: 'max-w-xs w-full',
      footer: 'flex flex-row flex-wrap gap-2 items-center',
    }"
  >
    <NuxtButton
      class="text-xl relative"
      aria-label="open navigation menu"
      color="primary"
      variant="subtle"
      icon="heroicons:bars-3-bottom-right"
    />

    <template #title>
      <CommonLogoPage @click="open = false" />
      <span class="sr-only">Mobile Navigation Bar</span>
    </template>

    <template #description>
      <NuxtButton
        class="dark:bg-red-600 dark:text-gray-200 text-xl"
        aria-label="close navigation menu"
        color="error"
        variant="subtle"
        icon="heroicons:x-mark"
        @click="open = false"
      />
      <p id="drawer-description" class="sr-only">
        This mobile navigation menu provides quick access to the main features
        of the application, including home, features, pricing, and profile. Use
        it to navigate easily through the application.
      </p>
    </template>

    <template #body>
      <nav
        class="flex flex-col gap-2 overflow-hidden"
        aria-labelledby="drawer-title"
        aria-describedby="drawer-description"
      >
        <NuxtButton
          v-for="item in paths"
          :key="item.path"
          :to="item.path"
          :prefetch-on="{
            interaction: true,
            visibility: false,
          }"
          variant="ghost"
          active-class="dark:bg-green-600/40 bg-green-200/40"
          class=""
          @click="open = false"
        >
          {{ item.label }}
        </NuxtButton>
      </nav>
    </template>

    <template #footer>
      <NuxtButton
        class="size-16 text-3xl grid place-content-center"
        label="En"
      />
      <CommonDarkModeButton
        class="size-16 text-3xl grid place-content-center"
      />
    </template>
  </NuxtDrawer>
</template>

<script lang="ts" setup>
import type { Paths } from "./Header.vue";

defineProps<{ paths: Paths[] }>();

const open = ref(false);
</script>

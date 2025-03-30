<template>
  <NuxtModal title="Modal with close button" close-icon="heroicons:arrow-right">
    <NuxtButton
      label="Open shorten link form"
      color="primary"
      icon="heroicons:plus"
      class="w-full sm:w-auto"
    />

    <template #body>
      <LazyShortenLinkForm hydrate-on-visible />
    </template>
  </NuxtModal>
</template>

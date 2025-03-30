<template>
  <div class="space-y-4">
    <div
      class="flex flex-col-reverse gap-16 sm:gap-0 sm:flex-row justify-between items-center mb-6"
    >
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        Shortened Links
      </h2>
      <ShortenLinkModalForm />
    </div>

    <NuxtInput
      icon="heroicons:magnifying-glass"
      placeholder="Search links..."
      class="mb-4 w-full"
    />

    <div class="space-y-4">
      <div
        v-for="link in links"
        :key="link.shortUrl"
        class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
      >
        <div class="flex justify-between items-center">
          <div class="flex-1 min-w-0">
            <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
              {{ link.originalUrl }}
            </p>
            <p class="text-emerald-500 font-medium">
              {{ link.shortUrl }}
            </p>
          </div>
          <div class="flex items-center space-x-4 ml-4">
            <div class="text-right">
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ link.date }}
              </p>
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {{ link.clicks }} clics
              </p>
            </div>
            <LazyNuxtButton
              variant="ghost"
              icon="heroicons:clipboard"
              square
              @click="copyToClipboard(link.shortUrl)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-6">
      <LazyNuxtPagination
        v-model:page="currentPage"
        hydrate-on-visible
        :sibling-count="1"
        :total="100"
        :per-page="10"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: Array<{
    originalUrl: string;
    shortUrl: string;
    date: string;
    clicks: string;
  }>;
}>();

const currentPage = ref(1);
const toast = useToast();

async function copyToClipboard(url: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(url);
    toast.add({
      title: "Success",
      description: "Link copied to clipboard successfully.",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: `Failed to copy link to clipboard. ${
        (error as Error)?.message || ""
      }`,
      color: "error",
    });
  }
}
</script>

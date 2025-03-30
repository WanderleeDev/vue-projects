<template>
  <NuxtForm
    class="flex flex-col sm:flex-row gap-4 w-full"
    :schema="schemaUrl"
    :state="state"
    @submit="onSubmit"
  >
    <NuxtFormField class="flex-1" name="url">
      <NuxtInput
        v-model="state.url"
        class="w-full"
        placeholder="Enter your link here"
        size="lg"
      />
    </NuxtFormField>

    <NuxtButton
      class="disabled:opacity-50 h-fit text-center font-medium block"
      type="submit"
      color="success"
      size="lg"
    >
      Shorten
    </NuxtButton>
  </NuxtForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { schemaUrl, type UrlSchemaType } from "./schemas/url.schema";

const toast = useToast();
const state = reactive({ url: "" });

function showToast() {
  toast.add({
    title: "Success",
    description: "Your action was completed successfully.",
    color: "success",
  });
}

async function onSubmit(event: FormSubmitEvent<UrlSchemaType>) {
  showToast();
  console.log(event.data.url);
}
</script>

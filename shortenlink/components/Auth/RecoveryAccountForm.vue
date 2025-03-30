<template>
  <NuxtForm
    class="mt-8 space-y-6"
    :schema="recoveryAccountSchema"
    :state="state"
    @submit="onSubmit"
  >
    <NuxtFormField label="Email" name="email">
      <NuxtInput
        v-model="state.email"
        class="w-full"
        type="email"
        placeholder="your@example.com"
        autocomplete="email"
      />
    </NuxtFormField>

    <div class="space-y-4">
      <NuxtButton type="submit" size="lg" block> Send Instructions </NuxtButton>

      <NuxtLink
        to="/auth/signUp"
        class="block text-center text-sm text-emerald-500 hover:text-emerald-600"
      >
        Back to Sign In
      </NuxtLink>
    </div>
  </NuxtForm>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import {
  recoveryAccountSchema,
  type RecoveryAccountInSchemaType,
} from "./schemas/recoveryAccount.schema";

const state: RecoveryAccountInSchemaType = reactive({
  email: "",
});

const toast = useToast();

function showToast() {
  toast.add({
    title: "Success",
    description: "Your action was completed successfully.",
    color: "success",
  });
}

async function onSubmit(event: FormSubmitEvent<RecoveryAccountInSchemaType>) {
  showToast();
  console.log(event.data);
}
</script>

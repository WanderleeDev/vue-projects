<template>
  <NuxtForm
    class="mt-8 space-y-6"
    :schema="signInSchema"
    :state="state"
    @submit="onSubmit"
  >
    <div class="space-y-4">
      <NuxtFormField label="Email" name="email">
        <NuxtInput
          v-model="state.email"
          class="w-full"
          type="email"
          placeholder="your@example.com"
          autocomplete="email"
        />
      </NuxtFormField>

      <NuxtFormField label="Password" name="password">
        <NuxtInput
          v-model="state.password"
          class="w-full"
          type="password"
          placeholder="••••••••"
          autocomplete="current-password"
        />
      </NuxtFormField>
    </div>

    <div class="flex items-center justify-between">
      <NuxtCheckbox v-model="hasRememberCredentials" label="Remember Me" />
      <NuxtLink
        to="/auth/recoveryAccount"
        class="text-sm text-emerald-500 hover:text-emerald-600"
      >
        Forgot Your Password?
      </NuxtLink>
    </div>

    <NuxtButton type="submit" size="lg" block> Sign In </NuxtButton>
  </NuxtForm>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import { signInSchema, type SignInSchemaType } from "./schemas/signIn.schema";

const toast = useToast();

const state: SignInSchemaType = reactive({
  email: "",
  password: "",
});
const hasRememberCredentials = ref(false);

function showToast() {
  toast.add({
    title: "Success",
    description: "Your action was completed successfully.",
    color: "success",
  });
}

async function onSubmit(event: FormSubmitEvent<SignInSchemaType>) {
  showToast();
  console.log(event.data);
}
</script>

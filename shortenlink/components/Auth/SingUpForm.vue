<template>
  <NuxtForm
    class="mt-8 space-y-6"
    :schema="signUpSchema"
    :state="state"
    @submit="onSubmit"
  >
    <div class="space-y-4">
      <NuxtFormField label="Full Name" name="name">
        <NuxtInput
          v-model="state.name"
          class="w-full"
          type="text"
          placeholder="John Doe"
        />
      </NuxtFormField>

      <NuxtFormField label="Email Address" name="email">
        <NuxtInput
          v-model="state.email"
          class="w-full"
          type="email"
          placeholder="your@example.com"
        />
      </NuxtFormField>

      <NuxtFormField label="Password" name="password">
        <NuxtInput
          v-model="state.password"
          class="w-full"
          type="password"
          placeholder="••••••••"
        />
      </NuxtFormField>

      <NuxtFormField label="Confirm Password" name="confirmPassword">
        <NuxtInput
          v-model="state.confirmPassword"
          class="w-full"
          type="password"
          placeholder="••••••••"
        />
      </NuxtFormField>
    </div>

    <NuxtFormField name="terms">
      <label form="terms" class="flex gap-2">
        <NuxtCheckbox id="terms" v-model="state.terms" />
        <p>
          I accept the
          <NuxtLink to="/terms" class="text-emerald-500 hover:text-emerald-600">
            terms and conditions
          </NuxtLink>
        </p>
      </label>
    </NuxtFormField>

    <NuxtButton type="submit" size="lg" block> Create Account </NuxtButton>
  </NuxtForm>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { type SignUpSchemaType, signUpSchema } from "./schemas/auth.schemas";

const toast = useToast();
const state: SignUpSchemaType = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

function showToast() {
  toast.add({
    title: "Success",
    description: "Your action was completed successfully.",
    color: "success",
  });
}

async function onSubmit(event: FormSubmitEvent<SignUpSchemaType>) {
  showToast();
  console.log(event.data);
}
</script>

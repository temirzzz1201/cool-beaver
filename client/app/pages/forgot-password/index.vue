<template>
  <section class="flex items-center justify-center w-full min-h-[70vh]">
    <u-form
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <u-form-field label="Введите вашу почту" name="email">
        <u-input v-model="state.email" type="email" class="min-w-[320px]" />
      </u-form-field>

      <u-button type="submit" aria-label="Отправить"> Отправить </u-button>
    </u-form>
  </section>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import * as v from "valibot";
import { useAuth } from "~/composables/useAuth";

const { getResetPasswordLink } = useAuth();

const schema = v.object({
  email: v.pipe(v.string(), v.email("Неверный email")),
});

const state = reactive<{ email: string }>({
  email: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<typeof state>) {
  try {
    const response = await getResetPasswordLink(event.data.email);
    toast.add({
      title: "Success",
      description: response.message,
      color: "success",
    });
    state.email = "";
  } catch (error) {
    throw new Error(`sending link error: ${error}`);
  }
}
</script>

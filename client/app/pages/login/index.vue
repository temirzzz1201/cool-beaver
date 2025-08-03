<template>
  <div class="flex items-center justify-center h-[70vh]">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-3xl mb-8">Вход</h1>
      <UFormField label="Почта" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Пароль" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit"> Войти </UButton>
      <p>
        Нет аккаунта?
        <client-only>
          <NuxtLink class="text-cyan-300 underline pl-2" to="/register"
            >Зарегестрироваться</NuxtLink
          >
        </client-only>
      </p>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";
import { useAuth } from "~/composables/useAuth";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Неверный email")),
  password: v.pipe(v.string(), v.minLength(8, "Минимум 8 символов")),
});

const { login } = useAuth();

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  email: "",
  password: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await login(event.data.email, event.data.password);
    if (event.data.email.length) {
      toast.add({
        title: "Отлично",
        description: `Вы успешно вошли - ${event.data.email}`,
        color: "success",
      });
    }
  } catch (e: any) {
    toast.add({
      title: "Ошибка",
      description: `Ошибка входа`,
      color: "success",
    });
    throw new Error(e.message) || "Login error";
  }
}
</script>

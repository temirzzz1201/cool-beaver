<template>
  <div class="flex items-center justify-center h-[70vh]">
    <UForm
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-3xl mb-8">Регистрация</h1>
      <UFormField label="Имя" name="name">
        <UInput v-model="state.name" />
      </UFormField>
      <UFormField label="Почта" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Пароль" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit"> Регистрация </UButton>
      <p>
        Нет аккаунта?
        <client-only>
          <NuxtLink class="text-cyan-300 underline pl-2" to="/login"
            >Войти</NuxtLink
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
  name: v.pipe(v.string(), v.minLength(4, "Минимум 4 символа")),
  email: v.pipe(v.string(), v.email("Неверный email")),
  password: v.pipe(v.string(), v.minLength(8, "Минимум 8 символов")),
});

const { register } = useAuth();

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  name: "",
  email: "",
  password: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await register(event.data.name, event.data.email, event.data.password);
    if (event.data.email.length) {
      toast.add({
        title: "Отлично",
        description: `Вы успешно зарегестрировались - ${event.data.email}`,
        color: "success",
      });
    }
  } catch (e: any) {
    toast.add({
      title: "Ошибка",
      description: `Ошибка регистрации`,
      color: "success",
    });
    throw new Error(e.message) || "Registr error";
  }
}
</script>

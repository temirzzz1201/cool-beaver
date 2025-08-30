<template>
  <div class="flex flex-col items-center justify-center h-[70vh]">
    <h1 class="text-2xl mb-8">Войти</h1>

    <app-form
      :schema="schema"
      :state="state"
      @submit="handleSubmit"
      class="mb-4"
    >
      <u-form-field label="Почта" name="email">
        <u-input v-model="state.email" type="email" class="min-w-[320px]" />
      </u-form-field>

      <u-form-field label="Пароль" name="password">
        <u-input
          v-model="state.password"
          type="password"
          class="min-w-[320px]"
        />
      </u-form-field>
    </app-form>
    <p class="min-w-[320px]">
      Нет аккаунта?
      <client-only>
        <nuxt-link
          class="inline-flex text-blue-500 underline pl-2 mb-6"
          to="/register"
          >Зарегестрироваться</nuxt-link
        >

        <nuxt-link class="flex text-blue-500" to="/forgot-password"
          >Забыли пароль?</nuxt-link
        >
      </client-only>
    </p>
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
async function handleSubmit(event: FormSubmitEvent<Schema>) {
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
      color: "error",
    });
    throw new Error(e.message) || "Login error";
  }
}
</script>

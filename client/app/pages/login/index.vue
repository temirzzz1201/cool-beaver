<template>
  <div class="flex items-center justify-center h-[70vh]">
    <u-form
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-2xl mb-8">Войти</h1>
      <u-form-field label="Почта" name="email">
        <u-input v-model="state.email" />
      </u-form-field>

      <u-form-field label="Пароль" name="password">
        <u-input v-model="state.password" type="password" />
      </u-form-field>

      <u-button color="secondary" type="submit"> Войти </u-button>
      <p>
        Нет аккаунта?
        <client-only>
          <nuxt-link class="text-blue-500 underline pl-2" to="/register"
            >Зарегестрироваться</nuxt-link
          >
        </client-only>
      </p>
    </u-form>
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

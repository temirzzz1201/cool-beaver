<template>
  <div class="flex items-center justify-center h-[70vh]">
    <u-form
      :schema="schema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-2xl mb-8">Создать аккаунт</h1>
      <u-form-field label="Имя" name="name">
        <u-input v-model="state.name" />
      </u-form-field>
      <u-form-field label="Почта" name="email">
        <u-input v-model="state.email" />
      </u-form-field>

      <u-form-field label="Пароль" name="password">
        <u-input v-model="state.password" type="password" />
      </u-form-field>

      <u-button color="secondary" type="submit"> Регистрация </u-button>
      <p>
        Уже есть аккаунт?
        <client-only>
          <nuxt-link class="text-blue-500 underline pl-2" to="/login"
            >Войти</nuxt-link
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

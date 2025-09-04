<template>
  <section class="max-w-[1920px] mx-auto mt-32 max-[768px]:mt-20">
    <header class="mb-12 text-center">
      <h1 class="text-3xl text-gray-700 font-bold">Контакты</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Свяжитесь с нами любым удобным способом.
      </p>
    </header>
  </section>

  <section class="mb-14">
    <client-only>
      <div class="rounded-xl overflow-hidden shadow-lg">
        <app-map />
      </div>
    </client-only>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
    <div
      v-for="item in store.contactsFeatureArray"
      class="p-6 bg-blue-100 dark:bg-gray-800 rounded-xl shadow flex flex-col items-center"
    >
      <u-icon :name="item.icon" class="text-blue-600 text-2xl mb-2" />
      <h3 class="font-semibold text-gray-700 text-lg mb-1">{{ item.title }}</h3>
      <p class="text-gray-600 dark:text-gray-300">{{ item.text }}</p>
    </div>
  </section>

  <section
    class="flex flex-col items-center mb-24 bg-blue-200 p-10 rounded-2xl"
  >
    <h2 class="text-2xl text-gray-700 font-semibold mb-4 text-left">
      Связаться с нами
    </h2>
    <app-form
      :schema="schema"
      :state="state"
      @submit="sendOrder"
      class="mb-4"
      button-title="Оставить заявку"
    >
      <u-form-field label="Имя" name="name">
        <u-input
          v-model="state.name"
          placeholder="Ваше имя"
          class="min-w-[320px]"
        />
      </u-form-field>
      <u-form-field label="Номер" name="phone">
        <input
          v-model="state.phone"
          placeholder="+7 (___) ___-__-__"
          class="min-w-[320px] bg-white h-[32px] px-1.5 rounded"
          type="tel"
          v-inputmask="{ mask: '+7 (999) 999-99-99' }"
        />
      </u-form-field>
      <u-form-field label="Почта (не обязательно)" name="email">
        <u-input
          v-model="state.email"
          placeholder="Ваша почта"
          class="min-w-[320px]"
          type="email"
        />
      </u-form-field>
      <u-form-field label="Описание заявки" name="email">
        <u-textarea
          v-model="state.description"
          placeholder="Описание заявки"
          class="min-w-[320px]"
        />
      </u-form-field>
    </app-form>
  </section>
</template>

<script setup lang="ts">
import * as v from "valibot";
definePageMeta({ prerender: true });
import { useMainStore } from "#imports";
const store = useMainStore();

const toast = useToast();

const schema = v.object({
  name: v.pipe(
    v.string(),
    v.minLength(2, "Имя должно содержать минимум 2 символа")
  ),
  phone: v.pipe(
    v.string(),
    v.regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона"
    )
  ),
  email: v.union([
    v.literal(""),
    v.pipe(v.string(), v.email("Введите корректный email")),
  ]),
  description: v.optional(
    v.pipe(
      v.string(),
      v.minLength(5, "Введите краткое описание (минимум 5 символов)")
    )
  ),
});

const state = reactive({
  name: "",
  phone: "",
  email: "",
  description: "",
});

const sendOrder = async () => {
  try {
    const response = await $fetch<{ message: string }>(
      `${mainUrl}/contact/send`,
      {
        method: "POST",
        body: { ...state },
      }
    );

    toast.add({
      title: "Отлично",
      description: response.message,
      color: "success",
    });

    Object.assign(state, { name: "", phone: "", email: "", description: "" });
  } catch (error) {
    toast.add({
      title: "Ошибка",
      description: `Введите корректный номер телефона`,
      color: "error",
    });
  }
};
</script>

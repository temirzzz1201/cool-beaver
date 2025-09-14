<template>
  <section class="max-w-[1920px] mx-auto mt-18 md:mt-32 mb-8 md:mb-14">
    <header class="text-center">
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3"
      >
        Связаться с нами
      </h1>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Свяжитесь с&nbsp;нами любым удобным способом — мы всегда на связи.
      </p>
    </header>
  </section>

  <section class="mb-8 md:mb-14">
    <client-only>
      <div class="rounded-2xl overflow-hidden shadow-lg">
        <app-map />
      </div>
    </client-only>
  </section>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-14"
  >
    <AppFeatureCard
      v-for="contact in store.contactsFeatureArray"
      :key="contact.id"
      :icon="contact.icon!"
      :title="contact.title ?? ''"
      :text="contact.text"
    />
  </section>

  <section class="mb-8 md:mb-24">
    <div
      class="flex flex-col items-center bg-gradient-to-r from-indigo-200 to-indigo-700 dark:from-gray-200 dark:to-gray-600 rounded-2xl shadow-lg text-center py-6"
    >
      <h2 class="text-2xl font-semibold text-white dark:text-white mt-6 mb-6">
        Оставить заявку
      </h2>
      <app-form
        :schema="schema"
        :state="state"
        @submit="sendOrder"
        class="w-full max-w-lg space-y-4"
        button-title="Оставить заявку"
      >
        <u-form-field label="Имя" name="name">
          <u-input
            v-model="state.name"
            placeholder="Ваше имя"
            class="min-w-[320px] w-full"
          />
        </u-form-field>
        <u-form-field label="Номер" name="phone">
          <input
            v-model="state.phone"
            placeholder="+7 (___) ___-__-__"
            class="min-w-[320px] w-full bg-white dark:bg-gray-900 h-[32px] px-1.5 rounded border border-gray-300"
            type="tel"
            v-inputmask="{ mask: '+7 (999) 999-99-99' }"
          />
        </u-form-field>
        <u-form-field label="Почта (не обязательно)" name="email">
          <u-input
            v-model="state.email"
            placeholder="Ваша почта"
            type="email"
            class="min-w-[320px] w-full"
          />
        </u-form-field>
        <u-form-field label="Описание заявки" name="description">
          <u-textarea
            v-model="state.description"
            placeholder="Описание заявки"
            class="min-w-[320px] w-full"
          />
        </u-form-field>
      </app-form>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ prerender: true });
import { useMainStore } from "#imports";
import * as v from "valibot";
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
    v.pipe(v.string(), v.minLength(5, "Введите описание (мин. 5 символов)"))
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
  } catch {
    toast.add({
      title: "Ошибка",
      description: `Введите корректный номер телефона`,
      color: "error",
    });
  }
};
</script>

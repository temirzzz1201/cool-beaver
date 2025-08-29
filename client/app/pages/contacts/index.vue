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
    <u-form
      :state="form"
      class="grid gap-4 max-w-[340px] w-full"
      @submit="onSubmit"
    >
      <u-form-group label="Ваше имя" name="name" required>
        <u-input
          v-model="form.name"
          placeholder="Введите имя"
          class="max-w-[340px] w-full"
        />
      </u-form-group>

      <u-form-group label="Телефон" name="phone" required>
        <u-input
          v-model="form.phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          class="max-w-[340px] w-full"
        />
      </u-form-group>

      <u-form-group label="Сообщение" name="message">
        <u-text-area
          v-model="form.message"
          placeholder="Ваше сообщение"
          class="max-w-[340px] w-full"
        />
      </u-form-group>

      <u-button
        class="flex items-center justify-center cursor-pointer w-[140px]"
        type="submit"
        color="secondary"
        >Отправить</u-button
      >
    </u-form>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ prerender: true });
import { useMainStore } from "#imports";
const store = useMainStore();

const form = ref({
  name: "",
  phone: "",
  message: "",
});

function onSubmit() {
  console.log("Форма отправлена:", form.value);
}
</script>

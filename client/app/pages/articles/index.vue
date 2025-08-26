<template>
  <section
    class="px-4 py-8 max-w-[1920px] mx-auto dark:bg-gray-900 dark:text-white mt-24 max-[768px]:mt-20"
  >
    <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold">Выполненные работы</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Здесь вы&nbsp;можете увидеть примеры выполненных нами работ.
        Мы&nbsp;ценим качество, скорость и&nbsp;ответственность при каждом
        заказе.
      </p>
    </header>
  </section>
  <section
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-14"
  >
    <app-articles-card :articles="articles" />
  </section>

  <section
    class="text-center py-12 bg-blue-50 dark:bg-gray-800 rounded-xl shadow mb-24"
  >
    <app-ctx>
      <template #title> Хотите заказать работу прямо сейчас?</template>
      <template #text>
        Свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;быстро подберём специалистов для
        вашего объекта.
      </template>
    </app-ctx>
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";

const { data: articles } = useAsyncData<Article[]>(
  "articles",
  () => $fetch(`${mainUrl}/api/articles`),
  {
    default: () => [],
  }
);
</script>

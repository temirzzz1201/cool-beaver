<template>
  <section
    class="max-w-[1920px] mx-auto dark:bg-gray-900 dark:text-white mt-32 max-[768px]:mt-20"
  >
    <header class="mb-8 text-center">
      <h1 class="text-3xl text-gray-700 font-bold">Выполненные работы</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Здесь вы&nbsp;можете увидеть примеры выполненных нами работ.
        Мы&nbsp;ценим качество, скорость и&nbsp;ответственность при каждом
        заказе.
      </p>
    </header>
  </section>

  <section
    v-if="articles.length > 0"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mb-14"
  >
    <app-articles-card :articles="articles" />
  </section>

  <app-ctx>
    <template #title>Хотите заказать работу прямо сейчас?</template>
    <template #text>
      Свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;быстро подберём специалистов для
      вашего объекта.
    </template>
  </app-ctx>

  <client-only>
    <div v-if="total > limit" class="flex justify-center my-10">
      <UPagination
        v-model:page="page"
        :items-per-page="limit"
        :total="total"
        show-edges
        color="secondary"
        active-color="secondary"
      />
    </div>
  </client-only>
</template>

<script setup lang="ts">
import type { Article } from "~/types";
import { ref, watch } from "vue";

const page = ref(1);
const limit = 10;
const total = ref(0);
const articles = ref<Article[]>([]);

async function loadArticles() {
  const res: any = await $fetch(`${mainUrl}/api/articles/paginated`, {
    params: { page: page.value, limit },
  });
  articles.value = res.data;
  total.value = res.total;
}

watch(page, loadArticles, { immediate: true });
</script>

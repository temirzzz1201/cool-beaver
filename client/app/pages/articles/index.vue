<template>
  <section class="max-w-[1920px] mx-auto mt-32 mb-14 max-[768px]:mt-20">
    <h1
      class="text-3xl text-gray-800 dark:text-white font-bold text-center mb-3"
    >
      Выполненные работы
    </h1>
    <p class="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Здесь вы&nbsp;можете увидеть примеры выполненных нами работ. Мы&nbsp;ценим
      качество, скорость и&nbsp;ответственность при каждом заказе.
    </p>
  </section>

  <section
    v-if="loading"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 mb-14"
  >
    <app-articles-card-skeleton :count="limit" />
  </section>

  <section
    v-if="articles.length > 0"
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 mb-8 md:mb-24"
  >
    <app-articles-card :articles="articles" />
  </section>

  <app-promo class="mb-8 md:mb-24">
    <template #title>Хотите заказать работу прямо сейчас?</template>
    <template #text>
      Свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;быстро подберём специалистов для
      вашего объекта.
    </template>
  </app-promo>

  <client-only>
    <div v-if="total > limit" class="flex justify-center my-10">
      <u-pagination
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
const loading = ref(true);

async function loadArticles() {
  loading.value = true;
  try {
    const res: any = await $fetch(`${mainUrl}/articles/paginated`, {
      params: { page: page.value, limit },
    });
    articles.value = res.data;
    total.value = res.total;
  } finally {
    loading.value = false;
  }
}

watch(page, loadArticles, { immediate: true });
</script>

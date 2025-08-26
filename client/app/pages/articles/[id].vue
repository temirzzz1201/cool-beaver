<template>
  <section
    class="px-4 py-8 max-w-[1024px] mx-auto dark:bg-gray-900 dark:text-white mt-24 max-[768px]:mt-20 mb-24"
  >
    <article v-if="article" class="prose max-w-none dark:prose-invert">
      <header class="mb-6">
        <h1 class="text-3xl font-bold">{{ article.title }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
          Опубликовано: {{ formatDate(article.createdAt) }}
        </p>
      </header>
      <p class="mb-8">{{ article.content }}</p>
    </article>

    <p v-else-if="error" class="text-red-500">Ошибка загрузки статьи</p>
    <p v-else class="text-gray-600 dark:text-gray-300">Загрузка...</p>
  </section>
  <section
    class="text-center py-8 bg-blue-50 dark:bg-gray-800 rounded-xl shadow mt-10"
  >
    <app-ctx>
      <template #title> Хотите такой&nbsp;же результат?</template>
      <template #text>
        Свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;выполним работу профессионально
        и&nbsp;быстро.
      </template>
    </app-ctx>
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { useRoute } from "vue-router";
import { formatDate } from "#imports";

const route = useRoute();
const articleId = route.params.id;

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`${mainUrl}/api/articles/${articleId}`)
);
</script>

<template>
  <section class="dark:text-white mt-32 max-[768px]:mt-20 mb-8 md:mb-24">
    <app-articles-card v-if="article" :articles="[article]" is-detail />
    <p v-else-if="error" class="text-red-500">Ошибка загрузки статьи</p>
    <p v-else class="text-gray-600 dark:text-gray-300">Загрузка...</p>
  </section>

  <app-ctx class="mb-8 md:mb-24">
    <template #title> Хотите такой&nbsp;же результат?</template>
    <template #text>
      Свяжитесь с&nbsp;нами, и&nbsp;мы&nbsp;выполним работу профессионально
      и&nbsp;быстро.
    </template>
  </app-ctx>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { useRoute } from "vue-router";

const route = useRoute();
const articleId = route.params.id;

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`${mainUrl}/articles/${articleId}`)
);
</script>

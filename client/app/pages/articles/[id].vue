<template>
  <article v-if="article" class="prose max-w-none">
    <header>
      <h1>{{ article.title }}</h1>
    </header>
    <section>
      <p>{{ article.content }}</p>
    </section>
  </article>

  <p v-else-if="error">Ошибка загрузки статьи</p>
  <p v-else>Загрузка...</p>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
const route = useRoute();
const articleId = route.params.id;

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`${mainUrl}/articles/${articleId}`)
);
</script>

<template>
  <section class="mt-34 mb-24">
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
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
const route = useRoute();
const articleId = route.params.id;

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`${mainUrl}/api/articles/${articleId}`)
);

console.log("article ", article.value);
</script>

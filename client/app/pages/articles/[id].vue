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
const route = useRoute();
const articleId = route.params.id;

interface Article {
  id: number;
  title: string;
  content: string;
}

const { data: article, error } = await useAsyncData<Article>(
  `article-${articleId}`,
  () => $fetch(`http://localhost:5000/articles/${articleId}`)
);
</script>

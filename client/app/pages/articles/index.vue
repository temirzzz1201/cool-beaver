<template>
  <h1>Articles</h1>
  <section class="flex mt-3">
    <app-articles-card :articles="articles" />
  </section>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  content: string;
}

const {
  data: articles,
  status,
  error,
} = useAsyncData<Article[]>(
  "articles",
  () => $fetch("http://localhost:5000/articles"),
  {
    default: () => [],
  }
);
</script>

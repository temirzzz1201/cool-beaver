<template>
  <h1 class="text-3xl mt-34">Статьи</h1>
  <section
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 mt-3 mb-24"
  >
    <app-articles-card :articles="articles" />
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

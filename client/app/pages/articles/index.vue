<template>
  <h1 class="text-3xl mb-8">Articles</h1>
  <section class="flex mt-3">
    <app-articles-card :articles="articles" />
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";

const {
  data: articles,
  status,
  error,
} = useAsyncData<Article[]>("articles", () => $fetch(`${mainUrl}/articles`), {
  default: () => [],
});
</script>

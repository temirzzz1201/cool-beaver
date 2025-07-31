<template>
  <section class="mb-14">
    <h1 class="text-3xl mb-8">Home</h1>
    <app-slider />
  </section>
  <section class="mb-14">
    <app-articles-card v-if="lastArticle" :articles="[lastArticle]" />
  </section>
  <section class="mb-14">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti
      sit commodi? Ipsam, quo eos. Quos animi aperiam sapiente, nostrum aut est
      cumque sed qui quisquam quia repellat, ut temporibus.
    </p>
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";

const { data: lastArticle } = await useAsyncData<Article>("last-article", () =>
  $fetch(`${mainUrl}/articles/last`)
);
</script>

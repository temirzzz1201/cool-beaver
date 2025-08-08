<template>
  <section class="mb-14 text-center">
    <h1 class="text-3xl mb-2 font-medium">Десница добра</h1>
    <p class="text-sm mb-8">Помощь людям в&nbsp;сложной ситуации</p>
    <app-slider />
  </section>
  <section class="mb-14">
    <h2 class="max-w-[700px] mb-8">
      Помогаем людям попавшим в&nbsp;сложную жизненную ситуацию. Потеряли
      работу, остались без жилья, утеряли документы. Мы&nbsp;поможем:
    </h2>
    <p class="mb-4 text-xl font-medium">Как мы можем помочь</p>
    <ul class="list-disc pl-4">
      <li class="mb-2">Предоствим бесплатное проживание;</li>
      <li class="mb-2">Бесплатное питание;</li>
      <li class="mb-2">Предоставим работу с ежедневными выплатами;</li>
      <li>Поможем восстановить документы;</li>
    </ul>
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
  $fetch(`${mainUrl}/api/articles/last`)
);
</script>

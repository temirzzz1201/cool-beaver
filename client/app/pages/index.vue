<template>
  <section class="mb-14 mt-34 text-center">
    <h1 class="text-4xl font-bold mb-4">Tasko</h1>
    <p class="text-lg mb-8 text-gray-600 dark:text-gray-300">
      Надёжные разнорабочие для любых задач&nbsp;&mdash; быстро, честно,
      с&nbsp;гарантией качества
    </p>
    <app-slider />
  </section>

  <!-- Услуги -->
  <section class="mb-14 max-w-5xl mx-auto text-center">
    <h2 class="text-2xl font-semibold mb-8">Наши услуги</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AppFeatureCard
        v-for="service in appFeatureServicesArray"
        :key="service.title"
        :icon="service.icon"
        :title="service.title"
        :text="service.text"
      />
    </div>
  </section>

  <section class="mb-14 max-w-4xl mx-auto text-center">
    <h2 class="text-2xl font-semibold mb-6">Почему выбирают нас</h2>
    <div class="grid sm:grid-cols-2 gap-6">
      <AppFeatureCard
        v-for="benefits in appFeatureBenefitsArray"
        :key="benefits.title"
        :icon="benefits.icon"
        :title="benefits.title"
        :text="benefits.text"
      />
    </div>
  </section>

  <section class="mb-14">
    <h2 class="text-2xl font-semibold mb-6 text-center">Полезные материалы</h2>
    <app-articles-card v-if="lastArticle" :articles="[lastArticle]" />
  </section>

  <section
    class="text-center py-12 bg-blue-50 dark:bg-gray-800 rounded-xl shadow mb-24"
  >
    <h2 class="text-2xl font-semibold mb-4">Нужны рабочие уже сегодня?</h2>
    <p class="mb-6 text-gray-600 dark:text-gray-300">
      Свяжитесь с&nbsp;нами прямо сейчас и&nbsp;получите консультацию бесплатно
    </p>
    <NuxtLink
      to="/contacts"
      class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Связаться
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";
const store = useMainStore();

const { appFeatureBenefitsArray, appFeatureServicesArray } = storeToRefs(store);

const { data: lastArticle } = await useAsyncData<Article>("last-article", () =>
  $fetch(`${mainUrl}/api/articles/last`)
);
</script>

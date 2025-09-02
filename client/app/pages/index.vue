<template>
  <section class="mb-14 mt-28 max-[768px]:mt-20">
    <h1 class="text-3xl text-gray-700 font-bold text-center mb-8">
      Добро пожаловать
    </h1>
    <h2
      class="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
    >
      Мы предоставляем профессиональных разнорабочих для строительных, убороных
      и хозяйственных задач. Быстро, качественно и надёжно.
    </h2>
  </section>
  <section class="mb-14 max-[768px]:mt-20">
    <app-slider :slides="slides" />
  </section>

  <section class="mb-14 max-w-[1920px] mx-auto text-left">
    <h2 class="text-2xl text-gray-700 font-semibold mb-8">Чем мы занимаемся</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AppFeatureCard
        v-for="service in appFeatureServicesArray"
        :key="service.id"
        :icon="service.icon"
        :title="service.title ?? ''"
        :text="service.text"
      />
    </div>
  </section>

  <section class="mb-14">
    <h2 class="text-2xl text-gray-700 font-semibold mb-6 text-left">
      Полезные материалы
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
      <app-articles-card v-if="lastArticles" :articles="lastArticles" />
    </div>
  </section>

  <section class="mb-14 max-w-[1920px] mx-auto text-left">
    <h2 class="text-2xl text-gray-700 font-semibold mb-6">
      Почему выбирают нас
    </h2>
    <div class="grid sm:grid-cols-2 gap-6">
      <AppFeatureCard
        v-for="benefit in appFeatureBenefitsArray"
        :key="benefit.id"
        :icon="benefit.icon"
        :title="benefit.title ?? ''"
        :text="benefit.text"
      />
    </div>
  </section>

  <app-ctx>
    <template #title>Нужны рабочие уже сегодня?</template>
    <template #text>
      Свяжитесь с&nbsp;нами прямо сейчас и&nbsp;получите консультацию бесплатно
    </template>
  </app-ctx>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";
const store = useMainStore();
const { appFeatureBenefitsArray, appFeatureServicesArray } = storeToRefs(store);

const { data: lastArticles } = await useAsyncData<
  (Article & { images?: { path: string }[] })[]
>("last-articles", () => $fetch(`${mainUrl}/articles/last`));

const slides = Array.from(
  { length: 6 },
  (_, i) => `/slider/worker${i + 1}.jpg`
);
</script>

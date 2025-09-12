<template>
  <section
    class="relative w-full h-[400px] md:h-[600px] flex mt-22 md:mt-34 mb-8 md:mb-14 bg-cover bg-no-repeat bg-center md:bg-top"
    style="background-image: url('/slider/worker1.jpg')"
  >
    <div class="absolute inset-0 bg-gray-800 opacity-40"></div>
    <div
      class="relative z-10 text-white text-right px-4 py-8 max-w-[560px] mt-auto ml-auto"
    >
      <h2 class="text-3xl md:text-5xl font-bold leading-8 md:leading-12 mb-4">
        Профессиональные разрабочие для любых задач
      </h2>
      <p class="text-lg md:text-xl ml-auto max-w-[360px] mb-6">
        Быстро, надёжно и&nbsp;качественно. Закажите прямо сейчас.
      </p>
      <nuxt-link
        to="/contacts"
        class="px-6 py-3 rounded-lg bg-blue-500 text-gray-100 hover:bg-blue-700 hover:text-white dark:text-gray-200 transition"
      >
        Связаться с нами
      </nuxt-link>
    </div>
  </section>

  <section class="mb-8 md:mb-14 max-w-[1920px] mx-auto text-left">
    <h2 class="text-2xl text-gray-800 dark:text-white font-semibold mb-8">
      Чем мы занимаемся
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3">
      <AppFeatureCard
        v-for="service in appFeatureServicesArray"
        :key="service.id"
        :icon="service.icon"
        :title="service.title ?? ''"
        :text="service.text"
      />
    </div>
  </section>

  <section class="mb-8 md:mb-14">
    <h2
      class="text-2xl text-gray-800 dark:text-white font-semibold mb-6 text-left"
    >
      Полезные материалы
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
      <app-articles-card v-if="lastArticles" :articles="lastArticles" />
    </div>
  </section>

  <section class="mb-14 max-w-[1920px] mx-auto text-left">
    <h2 class="text-2xl text-gray-800 dark:text-white font-semibold mb-6">
      Почему выбирают нас
    </h2>
    <div class="grid sm:grid-cols-2 gap-3 md:gap-3">
      <app-feature-card
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

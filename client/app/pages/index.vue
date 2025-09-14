<template>
  <app-hero />
  <section class="mb-8 md:mb-14 mt-6 md:mt-12 max-w-[1920px] mx-auto text-left">
    <h2
      class="text-2xl text-gray-800 dark:text-white font-semibold max-w-unset md:max-w-[320px] mb-2 ml-2 md:ml-6"
    >
      Чем занимаемся наша компания
    </h2>
    <p class="text-md mb-8 ml-2 md:ml-6">Виды выполняемых нами работ</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3">
      <app-feature-card
        v-for="service in appFeatureServicesArray"
        :key="service.id"
        :icon="service.icon!"
        :title="service.title ?? ''"
        :text="service.text"
      />
    </div>
  </section>

  <section class="mb-8 md:mb-14">
    <h2
      class="text-2xl text-gray-800 dark:text-white font-semibold mb-2 text-left ml-2 md:ml-6"
    >
      Полезные материалы
    </h2>
    <p class="text-md mb-8 ml-2 md:ml-6">Наши последние работы</p>

    <div
      v-if="pending"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 mb-14"
    >
      <app-articles-card-skeleton :count="4" />
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
      <app-articles-card :articles="lastArticles ?? []" />
    </div>
  </section>

  <section class="mb-8 md:mb-24 max-w-[1920px] mx-auto text-left">
    <h2
      class="text-2xl text-gray-800 dark:text-white font-semibold mb-2 ml-2 md:ml-6"
    >
      Почему выбирают нас
    </h2>
    <p class="text-md mb-8 ml-2 md:ml-6">Наши преимущества</p>

    <div class="grid sm:grid-cols-2 gap-3 md:gap-3">
      <app-feature-card
        v-for="benefit in appFeatureBenefitsArray"
        :key="benefit.id"
        :icon="benefit.icon!"
        :title="benefit.title ?? ''"
        :text="benefit.text"
      />
    </div>
  </section>

  <app-promo class="mb-8 md:mb-24">
    <template #title>Нужны рабочие уже сегодня?</template>
    <template #text>
      Свяжитесь с&nbsp;нами прямо сейчас и&nbsp;получите консультацию бесплатно
    </template>
  </app-promo>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";
const store = useMainStore();
const { appFeatureBenefitsArray, appFeatureServicesArray } = storeToRefs(store);

const {
  data: lastArticles,
  pending,
  error,
} = await useAsyncData<(Article & { images?: { path: string }[] })[]>(
  "last-articles",
  () => $fetch(`${mainUrl}/articles/last`)
);
</script>

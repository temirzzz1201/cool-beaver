<template>
  <section class="max-w-[1920px] mx-auto mt-18 md:mt-32 mb-8 md:mb-12">
    <header class="mb-12 text-center">
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3"
      >
        О компании
      </h1>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Мы предоставляем разнорабочих для любых задач&nbsp;&mdash; от стройки и
        ремонта до погрузки и разгрузки.
      </p>
    </header>
  </section>

  <section class="mb-8 md:mb-24">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6 ml-2">
      Почему выбирают нас
    </h2>
    <div class="grid md:grid-cols-3 gap-3 md:gap-6">
      <app-feature-card
        v-for="reason in aboutFeatureReasonsArray"
        :key="reason.id"
        :icon="reason.icon ?? ''"
        :title="reason.title ?? ''"
        :text="reason.text"
      />
    </div>
  </section>

  <section class="mb-8 md:mb-24">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6 ml-2">
      Наши услуги
    </h2>
    <div class="grid md:grid-cols-2 gap-3 md:gap-6">
      <app-feature-card
        v-for="service in aboutFeatureServicesArray"
        :key="service.id"
        :icon="service.icon ?? ''"
        :title="service.title ?? ''"
        :text="service.text"
      />
    </div>
  </section>

  <app-promo class="mb-8 md:mb-24">
    <template #title>Нужны разнорабочие уже сегодня?</template>
    <template #text>
      Свяжитесь с&nbsp;нами прямо сейчас — мы подберём сотрудников под вашу
      задачу и сможем отправить их в течение часа.
    </template>
  </app-promo>
</template>

<script setup lang="ts">
definePageMeta({ prerender: true });
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";

const store = useMainStore();

const { aboutFeatureReasonsArray, aboutFeatureServicesArray } =
  storeToRefs(store);
</script>

<template>
  <section
    class="px-4 py-8 max-w-[1920px] mx-auto dark:bg-gray-900 dark:text-white mt-24 max-[768px]:mt-20"
  >
    <header class="mb-8 text-center">
      <h1 class="text-3xl font-bold dark:bg-gray-900 dark:text-white">О нас</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Мы&nbsp;предоставляем профессиональных разнорабочих для любых задач
        на&nbsp;строительных и&nbsp;хозяйственных объектах. Наши специалисты
        опытные, ответственные и&nbsp;готовы приступить к&nbsp;работе
        в&nbsp;кратчайшие сроки.
      </p>
    </header>
  </section>
  <section class="mb-14">
    <h2 class="text-2xl font-semibold mb-6 text-left">Наши услуги</h2>
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

  <section class="mb-14 max-w-[1920px] mx-auto text-left">
    <h2 class="text-2xl font-semibold mb-6">Почему выбирают нас</h2>
    <div class="grid sm:grid-cols-2 gap-6">
      <AppFeatureCard
        v-for="benefit in appFeatureBenefitsArray"
        :key="benefit.title"
        :icon="benefit.icon"
        :title="benefit.title"
        :text="benefit.text"
      />
    </div>
  </section>

  <section
    class="text-center py-12 bg-blue-50 dark:bg-gray-800 rounded-xl shadow mb-24"
  >
    <app-ctx>
      <template #title>Нужны рабочие уже сегодня?</template>
      <template #text>
        Свяжитесь с&nbsp;нами прямо сейчас и&nbsp;получите консультацию
        бесплатно
      </template>
    </app-ctx>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";
const store = useMainStore();

const { appFeatureBenefitsArray, appFeatureServicesArray } = storeToRefs(store);

definePageMeta({
  prerender: true,
});
</script>

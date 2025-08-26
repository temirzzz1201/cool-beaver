<template>
  <section class="px-4 py-8 max-w-[1920px] mx-auto mt-24 max-[768px]:mt-20">
    <header class="mb-12 text-center">
      <h1 class="text-3xl font-bold">Контакты</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Свяжитесь с&nbsp;нами любым удобным способом&nbsp;&mdash;
        по&nbsp;телефону, почте или через форму на&nbsp;сайте.
      </p>
    </header>
  </section>
  <section class="mb-14">
    <h2 class="text-2xl font-semibold mb-4 text-left">Мы на карте</h2>
    <ClientOnly>
      <div class="rounded-xl overflow-hidden shadow-lg">
        <app-map />
      </div>
    </ClientOnly>
  </section>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
    <div
      class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow flex flex-col items-start"
    >
      <i class="i-lucide-phone text-blue-600 text-2xl mb-2"></i>
      <h3 class="font-semibold text-lg mb-1">Телефон</h3>
      <p class="text-gray-600 dark:text-gray-300">+7 (900) 123-45-67</p>
    </div>

    <div
      class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow flex flex-col items-start"
    >
      <i class="i-lucide-mail text-blue-600 text-2xl mb-2"></i>
      <h3 class="font-semibold text-lg mb-1">Электронная почта</h3>
      <p class="text-gray-600 dark:text-gray-300">help@yourdomain.org</p>
    </div>

    <div
      class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow flex flex-col items-start"
    >
      <i class="i-lucide-map-pin text-blue-600 text-2xl mb-2"></i>
      <h3 class="font-semibold text-lg mb-1">Адрес</h3>
      <p class="text-gray-600 dark:text-gray-300">
        г. Москва, ул. Добрая, д. 12
      </p>
    </div>

    <div
      class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow flex flex-col items-start"
    >
      <i class="i-lucide-clock text-blue-600 text-2xl mb-2"></i>
      <h3 class="font-semibold text-lg mb-1">Часы работы</h3>
      <p class="text-gray-600 dark:text-gray-300">Пн–Пт: 10:00 – 18:00</p>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  prerender: true,
});
</script>

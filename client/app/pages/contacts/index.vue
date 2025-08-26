<template>
  <section class="px-4 py-8 max-w-3xl mx-auto mt-34">
    <div class="space-y-6">
      <section class="mb-14">
        <h1 class="mb-6 font-medium text-3xl">Мы на карте</h1>
        <ClientOnly>
          <app-map />
        </ClientOnly>
      </section>
      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Телефон
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">+7 (900) 123-45-67</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Электронная почта
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">help@yourdomain.org</p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Адрес
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          г. Москва, ул. Добрая, д. 12
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Часы работы
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Пн–Пт: 10:00 – 18:00
        </p>
      </section>
    </div>

    <section
      class="mt-10 border-t pt-6 dark:bg-gray-900 dark:text-white text-sm mb-24"
    >
      Мы открыты к диалогу и сотрудничеству. Спасибо за вашу поддержку!
    </section>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  prerender: true,
});
</script>

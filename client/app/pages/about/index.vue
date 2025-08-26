<template>
  <section
    class="px-4 py-8 max-w-[1920px] mx-auto dark:bg-gray-900 dark:text-white mt-24 max-[768px]:mt-20"
  >
    <header class="mb-6">
      <h1 class="text-3xl font-bold dark:bg-gray-900 dark:text-white">О нас</h1>
      <p class="mt-2 dark:bg-gray-900 dark:text-white">
        В чём заключается наша помощь: Мы предоставляем людям питание, жильё и
        работу, а самое главное это возможность занять место в обществе.
        Социальная адаптация в настоящее время является актуальной проблемой для
        многих! Мы хотим делиться опытом и знаниями с людьми которые имеют в
        этом потребность и осознают её актуальность в нашей жизни.
      </p>
    </header>

    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Питание
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Мы ежедневно предоставляем горячее и сбалансированное питание
          проживающим.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Проживание
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Организуем уютные места со всеми необходимыми условиями — тёплым
          спальным местом, душем и всем необходимым.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Работа
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Предоставляем работу с ежедневными выплатами, на постоянной основе.
        </p>
      </section>
    </div>

    <footer
      class="mt-10 border-t pt-6 dark:bg-gray-900 dark:text-white text-sm mb-24"
    >
      Если вы нуждаетесь в помощи или хотите стать волонтёром — свяжитесь с
      нами. Вместе мы можем больше.
    </footer>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  prerender: true,
});
</script>

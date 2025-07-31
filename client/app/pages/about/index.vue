<template>
  <section class="px-4 py-8 max-w-3xl mx-auto dark:bg-gray-900 dark:text-white">
    <header class="mb-6">
      <h1 class="text-3xl font-bold dark:bg-gray-900 dark:text-white">О нас</h1>
      <p class="mt-2 dark:bg-gray-900 dark:text-white">
        Мы помогаем людям, оказавшимся в трудной жизненной ситуации,
        предоставляя питание, проживание и трудоустройство.
      </p>
    </header>

    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Питание
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Мы ежедневно предоставляем горячие и сбалансированные обеды всем
          нуждающимся. Команда волонтёров готовит пищу с заботой и вниманием.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Проживание
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Организуем безопасные временные приюты с базовыми условиями — тёплым
          спальным местом, душем и поддержкой волонтёров.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold dark:bg-gray-900 dark:text-white">
          Работа
        </h2>
        <p class="dark:bg-gray-900 dark:text-white mt-2">
          Мы помогаем восстановить документы, проходим с человеком путь до
          устройства на работу и сопровождаем в первые недели адаптации.
        </p>
      </section>
    </div>

    <footer
      class="mt-10 border-t pt-6 dark:bg-gray-900 dark:text-white text-sm"
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

<template>
  <section class="px-4 py-8 max-w-3xl mx-auto">
    <header class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">О нас</h1>
      <p class="mt-2 text-gray-600">
        Мы помогаем людям, оказавшимся в трудной жизненной ситуации,
        предоставляя питание, проживание и трудоустройство.
      </p>
    </header>

    <div class="space-y-6">
      <section>
        <h2 class="text-2xl font-semibold text-gray-700">Питание</h2>
        <p class="text-gray-600 mt-2">
          Мы ежедневно предоставляем горячие и сбалансированные обеды всем
          нуждающимся. Команда волонтёров готовит пищу с заботой и вниманием.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">Проживание</h2>
        <p class="text-gray-600 mt-2">
          Организуем безопасные временные приюты с базовыми условиями — тёплым
          спальным местом, душем и поддержкой волонтёров.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-gray-700">Работа</h2>
        <p class="text-gray-600 mt-2">
          Мы помогаем восстановить документы, проходим с человеком путь до
          устройства на работу и сопровождаем в первые недели адаптации.
        </p>
      </section>
    </div>

    <footer class="mt-10 border-t pt-6 text-gray-600 text-sm">
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

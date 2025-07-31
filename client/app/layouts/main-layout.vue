<template>
  <div
    class="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen"
  >
    <app-header class="mb-8">
      <app-navigation />
    </app-header>
    <UApp>
      <main class="w-full max-w-[1920px] px-3 py-4 mx-auto">
        <slot />
      </main>
    </UApp>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Десница добра",
  htmlAttrs: {
    lang: "ru",
  },
  meta: [
    {
      name: "description",
      content:
        "Добро пожаловать на Десница добра — здесь вы найдете самые свежие статьи и материалы.",
    },
    { property: "og:title", content: "Десница добра" },
    {
      property: "og:description",
      content:
        "Добро пожаловать на Десница добра — здесь вы найдете самые свежие статьи и материалы.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://coolbeaver.ru/" }, // укажи свой домен
    { property: "og:image", content: "https://coolbeaver.ru/og-image.jpg" }, // путь к изображению для предпросмотра
  ],
  link: [{ rel: "canonical", href: "https://coolbeaver.ru/" }],
});
</script>

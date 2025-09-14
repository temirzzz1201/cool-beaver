<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-r from-white-50 to-gray-300 dark:from-gray-400 dark:to-gray-600"
  >
    <app-header>
      <app-navigation />
    </app-header>

    <u-app class="flex-1 flex flex-col">
      <main class="flex-1 w-full max-w-[1920px] px-3 py-4 mx-auto">
        <slot />
      </main>
    </u-app>

    <app-footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Tasko",
  htmlAttrs: {
    lang: "ru",
  },
  meta: [
    {
      name: "description",
      content:
        "Добро пожаловать на Tasko — здесь вы найдете самые свежие статьи и материалы.",
    },
    { property: "og:title", content: "Tasko" },
    {
      property: "og:description",
      content:
        "Добро пожаловать на Tasko — здесь вы найдете самые свежие статьи и материалы.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://tasko.ru/" },
    { property: "og:image", content: "https://tasko.ru/og-image.jpg" },
  ],
  link: [{ rel: "canonical", href: "https://tasko.ru/" }],
});
</script>

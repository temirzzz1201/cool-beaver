<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between px-3 py-4 mr-auto ml-auto"
  >
    <nuxt-link class="flex items-center" to="/">
      <nuxt-img height="50" src="/logo.jpg" />
      <p class="pl-2">Крутые бобры</p>
    </nuxt-link>
    <ul class="flex items-center">
      <li class="cursor-pointer mr-2" v-for="link in navLinks" :key="link.id">
        <nuxt-link :to="link.link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
type NavLinks = {
  id: number;
  title: string;
  link: string;
};
const navLinks = ref<NavLinks[]>([
  {
    id: 1,
    title: "Статьи",
    link: "/articles",
  },
  {
    id: 2,
    title: "О нас",
    link: "/about",
  },
  {
    id: 3,
    title: "Контакты",
    link: "/contacts",
  },
]);
</script>

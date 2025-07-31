<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between px-3 py-4 mr-auto ml-auto"
  >
    <nuxt-link class="flex items-center" to="/">
      <nuxt-img height="50" src="/logo.jpg" />
      <p class="pl-2">Крутые бобры</p>
    </nuxt-link>
    <ul class="flex items-center">
      <li
        v-for="(link, index) in store.navLinks"
        :key="link.id"
        :class="[
          'cursor-pointer',
          index !== store.navLinks.length - 1 ? 'mr-5' : 'mr-0',
        ]"
      >
        <nuxt-link :to="link.link">
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
const store = useMainStore();
</script>

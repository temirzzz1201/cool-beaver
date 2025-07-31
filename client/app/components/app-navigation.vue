<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between px-3 py-4 mr-auto ml-auto"
  >
    <nuxt-link class="flex items-center" to="/">
      <nuxt-img class="rounded" height="50" src="/logo1.png" />
      <p class="text-white pl-2">Десница добра</p>
    </nuxt-link>

    <ul class="flex items-center relative">
      <li
        v-for="(link, index) in store.navLinks"
        :key="link.id"
        :class="[
          'cursor-pointer',
          index !== store.navLinks.length - 1 ? 'mr-5' : 'mr-0',
        ]"
      >
        <nuxt-link :to="link.link" class="text-white">
          {{ link.title }}
        </nuxt-link>
      </li>
      <ClientOnly v-if="!colorMode?.forced">
        <UButton
          class="ml-4"
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />

        <template #fallback>
          <div class="size-8" />
        </template>
      </ClientOnly>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
const store = useMainStore();

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

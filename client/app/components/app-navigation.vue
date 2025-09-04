<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between items-center px-3 py-4 mr-auto ml-auto"
  >
    <app-logo />

    <ul class="hidden md:flex items-center">
      <li
        v-for="(link, index) in store.navLinks"
        :key="link.id"
        :class="index !== store.navLinks.length - 1 ? 'mr-5' : ''"
      >
        <u-link
          :to="link.link"
          class="text-[17px] text-gray-100 dark:text-white"
          active-class="font-bold"
          inactive-class="text-muted"
        >
          {{ link.title }}
        </u-link>
      </li>
      <client-only v-if="!colorMode?.forced">
        <u-button
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          variant="ghost"
          @click="isDark = !isDark"
          class="flex items-center justify-center pl-3 text-gray-100"
        />
      </client-only>
    </ul>

    <div class="md:hidden flex items-center">
      <button @click="open = !open" class="text-gray-100 focus:outline-none">
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <u-drawer
      v-model:open="open"
      title="Tasko"
      description="Ваши рабочие сегодня"
      direction="left"
      class="bg-blue-400 dark:bg-gray-800"
      :ui="{
        title: 'text-2xl text-gray-100',
        description: 'text-lg text-gray-100',
      }"
    >
      <template #body>
        <ul class="flex flex-col mt-4">
          <li v-for="link in store.navLinks" :key="link.id" class="mb-4">
            <u-link
              v-if="link.title"
              :to="link.link"
              class="text-gray-100 dark:text-white text-[18px]"
              active-class="font-bold"
              inactive-class="text-muted"
            >
              {{ link.title }}
            </u-link>
          </li>
          <li class="mb-4">
            <u-link
              href="mailto:name@email.com"
              class="text-gray-100 dark:text-white text-[18px]"
            >
              name@email.com
            </u-link>
          </li>
          <li class mb-4>
            <u-link
              href="tel:+790000000"
              class="text-gray-100 dark:text-white text-[18px]"
            >
              8 900 000 00 00
            </u-link>
          </li>
          <client-only v-if="!colorMode?.forced">
            <u-button
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              variant="ghost"
              @click="isDark = !isDark"
              class="flex items-center justify-center pt-4 text-gray-100"
            />
          </client-only>
        </ul>
      </template>
    </u-drawer>
  </nav>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
const store = useMainStore();

const colorMode = useColorMode();
const open = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

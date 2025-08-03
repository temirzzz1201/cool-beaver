<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between px-3 py-4 mr-auto ml-auto"
  >
    <nuxt-link class="flex items-center" to="/">
      <nuxt-img class="rounded" height="50" src="/logo.png" />
      <p class="text-white font-semibold pl-2">Десница добра</p>
    </nuxt-link>

    <ul class="hidden md:flex items-center">
      <li
        v-for="(link, index) in store.navLinks"
        :key="link.id"
        :class="[
          'cursor-pointer',
          index !== store.navLinks.length - 1 ? 'mr-5' : 'mr-0',
        ]"
      >
        <u-link
          :to="link.link"
          class="text-lg text-white dark:bg-gray-900 dark:text-white"
          active-class="font-bold"
          inactive-class="text-muted"
        >
          {{ link.title }}
        </u-link>
      </li>
      <client-only v-if="!colorMode?.forced">
        <u-button
          class="ml-4"
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          color="neutral"
          variant="ghost"
          @click="isDark = !isDark"
        />
      </client-only>
    </ul>

    <u-drawer
      v-model:open="open"
      title="Drawer with description"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      direction="left"
    >
      <div class="md:hidden flex items-center">
        <button class="text-white focus:outline-none">
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
      <template #body>
        <ul class="flex flex-col">
          <li
            class="mb-4"
            v-for="(link, index) in store.navLinks"
            :key="link.id"
          >
            <u-link
              :to="link.link"
              class="text-black dark:bg-gray-900 dark:text-white"
              active-class="font-bold"
              inactive-class="text-muted"
            >
              {{ link.title }}
            </u-link>
          </li>
          <client-only v-if="!colorMode?.forced">
            <u-button
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="ghost"
              @click="isDark = !isDark"
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

defineShortcuts({
  o: () => (open.value = !open.value),
});

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

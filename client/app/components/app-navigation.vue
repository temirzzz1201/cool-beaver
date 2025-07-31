<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between px-3 py-4 mr-auto ml-auto"
  >
    <nuxt-link class="flex items-center" to="/">
      <nuxt-img class="rounded" height="50" src="/logo1.png" />
      <p class="text-white pl-2">Десница добра</p>
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
      </ClientOnly>
    </ul>

    <UDrawer
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
            <nuxt-link
              :to="link.link"
              class="text-black dark:bg-gray-900 dark:text-white"
            >
              {{ link.title }}
            </nuxt-link>
          </li>
          <ClientOnly v-if="!colorMode?.forced">
            <UButton
              :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
              color="neutral"
              variant="ghost"
              @click="isDark = !isDark"
            />
          </ClientOnly>
        </ul>
      </template>
    </UDrawer>
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

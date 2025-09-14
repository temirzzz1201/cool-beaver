<template>
  <nav
    class="w-full max-w-[1920px] flex justify-between items-center px-6 py-4 mx-auto"
  >
    <app-logo />

    <ul class="hidden md:flex items-center space-x-2 lg:space-x-6">
      <li v-for="link in store.navLinks" :key="link.id">
        <u-link
          :to="link.link"
          class="text-[16px] lg:text-[18px] font-medium text-indigo-600 dark:text-gray-300 hover:text-blue-600 whitespace-nowrap"
          active-class="font-bold text-blue-600"
        >
          {{ link.title }}
        </u-link>
      </li>
      <client-only v-if="!colorMode?.forced">
        <u-button
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          variant="ghost"
          @click="isDark = !isDark"
          class="text-indigo-700 dark:text-gray-300"
        />
      </client-only>
    </ul>

    <div class="md:hidden flex items-center">
      <u-button
        @click="open = !open"
        variant="ghost"
        class="text-indigo-700 dark:text-gray-200"
      >
        <u-icon :name="open ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
      </u-button>
    </div>

    <u-drawer
      v-model:open="open"
      title="Tasko"
      description="Ваши рабочие сегодня"
      direction="left"
      class="bg-white dark:bg-gray-900"
      :ui="{
        title: 'text-4xl mb-4 font-bold text-indigo-700 dark:text-gray-100',
        description: 'text-md text-indigo-400 dark:text-gray-300',
      }"
    >
      <template #body>
        <client-only v-if="!colorMode?.forced">
          <u-button
            :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
            variant="ghost"
            @click="isDark = !isDark"
            class="text-indigo-700 dark:text-gray-300 absolute top-4 right-3"
          />
        </client-only>
        <ul class="flex flex-col mt-4 space-y-4">
          <li v-for="link in store.navLinks" :key="link.id">
            <u-link
              :to="link.link"
              class="text-lg font-medium text-indigo-500 dark:text-gray-200 hover:text-blue-600"
              active-class="font-bold text-blue-600"
            >
              {{ link.title }}
            </u-link>
          </li>
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
  get: () => colorMode.value === "dark",
  set: (val) => (colorMode.preference = val ? "dark" : "light"),
});
</script>

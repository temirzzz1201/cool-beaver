<template>
  <footer
    class="w-full bg-blue-50 dark:bg-gray-900 text-gray-600 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(59,130,246,0.3)]"
  >
    <div class="max-w-[1920px] mx-auto px-6 py-6 grid gap-6 md:grid-cols-3">
      <div class="hidden sm:flex flex-col">
        <NuxtLink to="/" class="text-2xl font-bold mb-2 dark:text-white">
          Tasko
        </NuxtLink>
        <ul class="text-sm text-gray-600 dark:text-white space-y-2">
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-hammer"
              class="w-4 h-4 text-gray-600 dark:text-white"
            />
            Стройка
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-building-2"
              class="w-4 h-4 text-gray-600 dark:text-white"
            />
            Демонтаж
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-leaf"
              class="w-4 h-4 text-gray-600 dark:text-white"
            />
            Уборка
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-shovel"
              class="w-4 h-4 text-gray-600 dark:text-white"
            />
            Земельные работы
          </li>
          <li class="flex items-center gap-2">
            <UIcon
              name="i-lucide-clock"
              class="w-4 h-4 text-gray-600 dark:text-white"
            />
            Работаем быстро и честно
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-2 text-gray-600 dark:text-white">
          Навигация
        </h4>
        <ul class="space-y-1 text-sm">
          <li v-for="link in store.navLinks" :key="link.id">
            <u-link
              :to="link.link"
              class="hover:underline transition-colors duration-200"
              active-class="font-bold"
              inactive-class="text-gray-600 dark:text-white"
            >
              {{ link.title }}
            </u-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-2 text-gray-600 dark:text-white">
          Контакты
        </h4>
        <div class="flex flex-col gap-1 text-sm">
          <a
            href="mailto:name@email.com"
            class="hover:underline transition-colors duration-200 dark:text-white"
          >
            ✉️ name@email.com
          </a>
          <a
            href="tel:+790000000"
            class="hover:underline transition-colors duration-200 dark:text-white"
          >
            📞 8 900 00 00
          </a>
        </div>
      </div>
    </div>

    <div
      class="border-t border-white/20 text-center py-3 text-sm text-gray-600 dark:text-white"
    >
      © {{ new Date().getFullYear() }} Tasko. Все права защищены.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";

const store = useMainStore();
</script>

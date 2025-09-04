<template>
  <footer
    class="w-full bg-blue-500 dark:bg-gray-800 text-gray-100 dark:text-white backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(59,130,246,0.3)]"
  >
    <div class="max-w-[1920px] mx-auto px-6 py-6 grid gap-6 md:grid-cols-3">
      <div class="hidden sm:flex flex-col">
        <nuxt-link to="/" class="text-2xl font-bold mb-2 dark:text-white">
          Tasko
        </nuxt-link>

        <ul class="text-sm space-y-2">
          <li
            class="flex items-center text-gray-100 dark:text-white gap-2 text-[16px]"
            v-for="item in store.footerFeatureArray"
            :key="item.id"
          >
            <u-icon
              :name="item.icon"
              class="w-4 h-4 text-gray-100 text-[16px] dark:text-white"
            />
            {{ item.text }}
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-2 text-gray-100 dark:text-white">
          Навигация
        </h4>
        <ul class="space-y-1 text-sm">
          <li v-for="link in store.navLinks" :key="link.id">
            <u-link
              :to="link.link"
              class="hover:underline text-[16px]"
              active-class="font-bold text-gray-200 text-[18px]"
              inactive-class="text-gray-100 dark:text-white"
            >
              {{ link.title }}
            </u-link>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-lg font-semibold mb-2 text-gray-100 dark:text-white">
          Контакты
        </h4>
        <div class="flex flex-col gap-1 text-sm">
          <u-link
            href="mailto:name@email.com"
            class="text-[16px] dark:text-white mb-2"
          >
            <div class="flex items-center text-gray-100 dark:text-white">
              <u-icon name="i-lucide-mail" class="w-4 h-4 mr-2" />
              name@email.com
            </div>
          </u-link>
          <u-link href="tel:+790000000" class="hover:underline">
            <div class="flex items-center text-gray-100 dark:text-white">
              <u-icon name="i-lucide-phone" class="w-4 h-4 mr-2" />
              8 900 000 00 00
            </div>
          </u-link>
        </div>
      </div>
    </div>

    <div
      class="border-t border-white/20 text-center py-3 text-sm text-gray-100 dark:text-white"
    >
      © {{ new Date().getFullYear() }} Tasko. Все права защищены.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";

const store = useMainStore();
</script>

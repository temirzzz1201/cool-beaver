<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">О компании</h3>
          <p class="text-sm leading-6">
            Мы&nbsp;предоставляем профессиональных разнорабочих для
            строительных, уборочных и&nbsp;хозяйственных задач. Надёжность
            и&nbsp;качество&nbsp;&mdash; наш приоритет.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Навигация</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in store.navLinks" :key="item.id">
              <nuxt-link :to="item.link" class="hover:text-white"
                ><span>
                  {{ item.title }}
                </span></nuxt-link
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Контакты</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <nuxt-link class="flex text-white" href="mailto:tmzzz@inbox.ru">
                <u-icon
                  :aria-hidden="true"
                  name="i-lucide-mail"
                  class="w-4 h-4 mr-2"
                />
                <span>tmzzz@inbox.ru</span>
              </nuxt-link>
            </li>

            <li>
              <u-link class="flex text-white" href="tel:+79180989694">
                <u-icon
                  :aria-hidden="true"
                  name="i-lucide-phone"
                  class="w-4 h-4 mr-2"
                />
                <span>+7 918 098 96 94</span>
              </u-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Мы в соцсетях</h3>
          <div class="flex space-x-4">
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon
                aria-hidden="true"
                name="i-ri-facebook-circle-fill"
                class="w-6 h-6"
              />
              <span class="sr-only">facebook</span>
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon
                aria-hidden="true"
                name="i-ri-instagram-fill"
                class="w-6 h-6"
              />
              <span class="sr-only">instagram</span>
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon
                aria-hidden="true"
                name="i-ri-telegram-fill"
                class="w-6 h-6"
              />
              <span class="sr-only">telegram</span>
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon
                aria-hidden="true"
                name="i-ri-youtube-fill"
                class="w-6 h-6"
              />
              <span class="sr-only">youtube</span>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {{ new Date().getFullYear() }} TASKO. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useMainStore } from "#imports";
const store = useMainStore();
</script>

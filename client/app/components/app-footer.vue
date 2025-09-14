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
            <li>
              <NuxtLink to="/" class="hover:text-white">Главная</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/articles" class="hover:text-white"
                >Статьи</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/services" class="hover:text-white"
                >Услуги</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/contacts" class="hover:text-white"
                >Контакты</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Контакты</h3>
          <ul class="space-y-2 text-sm">
            <li class="whitespace-nowrap">
              📍 г. Москва, ул. Примерная, д. 12
            </li>
            <li class="whitespace-nowrap">📞 +7 (999) 123-45-67</li>
            <li class="whitespace-nowrap">✉️ info@company.ru</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Мы в соцсетях</h3>
          <div class="flex space-x-4">
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon name="i-ri-facebook-circle-fill" class="w-6 h-6" />
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon name="i-ri-instagram-fill" class="w-6 h-6" />
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon name="i-ri-telegram-fill" class="w-6 h-6" />
            </a>
            <a href="#" target="_blank" class="hover:text-white">
              <u-icon name="i-ri-youtube-fill" class="w-6 h-6" />
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

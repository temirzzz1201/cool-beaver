<template>
  <section class="px-4 py-8 max-w-[1920px] mx-auto mt-24 max-[768px]:mt-20">
    <header class="mb-12 text-center">
      <h1 class="text-3xl text-gray-700 font-bold">О компании</h1>
      <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Наша компания специализируется на&nbsp;предоставлении разнорабочих для
        любых задач&nbsp;&mdash; от&nbsp;стройки и&nbsp;ремонта до&nbsp;погрузки
        и&nbsp;разгрузки.
      </p>
    </header>
  </section>

  <section class="mb-14">
    <h2 class="text-2xl text-gray-700 font-semibold mb-6 text-left">
      Почему выбирают нас
    </h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">
          Опытные разнорабочие
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          В&nbsp;нашей базе только проверенные сотрудники с&nbsp;опытом работы
          на&nbsp;стройках, складах, при погрузке и&nbsp;разгрузке.
        </p>
      </div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">Гибкий подход</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Предоставляем персонал на&nbsp;любое время&nbsp;&mdash;
          от&nbsp;нескольких часов до&nbsp;долгосрочных проектов.
        </p>
      </div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">Доступные цены</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Мы&nbsp;предлагаем честные расценки без скрытых доплат, сохраняя
          высокое качество работы.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-14">
    <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-left">
      Наши услуги
    </h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">
          Подсобные рабочие
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          Помощь на&nbsp;строительных объектах, уборка территории, вынос мусора,
          подача материалов.
        </p>
      </div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">Грузчики</h3>
        <p class="text-gray-600 dark:text-gray-300">
          Погрузка и&nbsp;разгрузка материалов, мебели, оборудования, работа
          на&nbsp;складах.
        </p>
      </div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">
          Разнорабочие на час
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          Если нужно срочно выполнить мелкие задачи&nbsp;&mdash; наши
          специалисты готовы выйти в&nbsp;тот&nbsp;же день.
        </p>
      </div>
      <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h3 class="font-semibold text-gray-700 text-lg mb-2">
          Долгосрочные проекты
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          Предоставляем бригады разнорабочих для длительных строительных
          и&nbsp;ремонтных объектов.
        </p>
      </div>
    </div>
  </section>

  <app-ctx>
    <template #title>Нужны разнорабочие уже сегодня?</template>
    <template #text>
      Свяжитесь с&nbsp;нами прямо сейчас — мы подберём проверенных сотрудников
      под вашу задачу и сможем отправить их уже в течение часа.
    </template>
  </app-ctx>
</template>

<script setup lang="ts">
definePageMeta({ prerender: true });
</script>

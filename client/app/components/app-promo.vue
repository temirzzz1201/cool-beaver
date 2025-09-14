<template>
  <section
    class="flex flex-col items-center py-16 px-6 bg-gradient-to-r from-indigo-200 to-indigo-700 dark:from-gray-200 dark:to-gray-600 rounded-2xl shadow-lg text-center"
  >
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
      <slot name="title"></slot>
    </h2>
    <p class="max-w-[768px] text-lg text-white/90 dark:text-gray-200 mb-8">
      <slot name="text"></slot>
    </p>
    <nuxt-link
      to="/contacts"
      class="px-8 py-3 rounded-lg bg-white text-indigo-500 font-semibold shadow hover:bg-indigo-700 hover:text-white dark:bg-gray-200 dark:text-gray-800 transition"
    >
      Связаться с нами
    </nuxt-link>
  </section>
</template>

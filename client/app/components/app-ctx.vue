<template>
  <section
    class="flex flex-col items-center py-12 bg-blue-600 dark:bg-gray-400 rounded-xl shadow mb-24"
  >
    <h2 class="text-2xl font-semibold text-gray-100 dark:text-white mb-4">
      <slot name="title"></slot>
    </h2>
    <p class="max-w-[768px] text-center text-white dark:text-gray-200 mb-6">
      <slot name="text"></slot>
    </p>
    <nuxt-link
      to="/contacts"
      class="px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-700 hover:text-white dark:text-gray-500 transition"
    >
      Связаться
    </nuxt-link>
  </section>
</template>

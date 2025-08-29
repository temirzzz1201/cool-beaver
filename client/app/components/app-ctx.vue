<template>
  <section
    class="text-center py-12 bg-blue-600 text-white rounded-xl shadow mb-24"
  >
    <h2 class="text-2xl font-semibold mb-4"><slot name="title"></slot></h2>
    <p class="text-white dark:text-gray-300 mb-6">
      <slot name="text"></slot>
    </p>
    <nuxt-link
      to="/contacts"
      class="px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-blue-700 hover:text-white transition"
    >
      Связаться
    </nuxt-link>
  </section>
</template>
